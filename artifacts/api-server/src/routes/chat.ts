import { Router } from "express";
import { openai } from "@workspace/integrations-openai-ai-server";
import { SendChatMessageBody } from "@workspace/api-zod";

const router = Router();

const SYSTEM_PROMPT = `Você é um assistente virtual especializado em cirurgia oncológica, vinculado à clínica do Dr. cirurgião oncológico em Campo Largo, Paraná.

Seu papel é:
- Responder dúvidas sobre cirurgia oncológica de forma clara, acolhedora e empática
- Explicar procedimentos cirúrgicos oncológicos (ressecção de tumores, mastectomia, colectomia, etc.)
- Orientar sobre sinais de alerta e sintomas que merecem atenção médica
- Esclarecer dúvidas sobre o processo de diagnóstico e tratamento do câncer
- Incentivar o paciente a agendar uma consulta quando necessário
- Fornecer informações sobre a clínica localizada em Campo Largo, PR

Diretrizes importantes:
- Seja sempre acolhedor, empático e tranquilizador
- NUNCA faça diagnósticos. Sempre recomende consulta médica para avaliação individual
- Use linguagem simples e acessível, evitando jargão médico excessivo
- Se perguntarem sobre emergências, oriente a buscar pronto-socorro imediatamente
- Quando adequado, sugira agendar uma consulta
- Limite respostas a 3-4 parágrafos para manter clareza

Sobre a clínica:
- Localização: Campo Largo, Paraná
- Especialidade: Cirurgia Oncológica
- Agendamentos: disponíveis pelo site ou telefone`;

router.post("/", async (req, res) => {
  const parsed = SendChatMessageBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Mensagem inválida." });
    return;
  }

  const { message, history = [] } = parsed.data;

  const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
    { role: "system", content: SYSTEM_PROMPT },
    ...(history ?? []).map((h) => ({
      role: h.role as "user" | "assistant",
      content: h.content,
    })),
    { role: "user", content: message },
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-5.1",
    max_completion_tokens: 1024,
    messages,
  });

  const reply =
    completion.choices[0]?.message?.content ??
    "Desculpe, não consegui processar sua mensagem. Tente novamente.";

  res.json({ reply });
});

export default router;
