import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout";
import { useSendChatMessage } from "@workspace/api-client-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { ChatHistoryItem } from "@workspace/api-client-react/src/generated/api.schemas";

export default function Chat() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<ChatHistoryItem[]>([
    { role: "assistant", content: "Olá. Sou o assistente virtual da clínica. Posso tirar dúvidas gerais sobre cirurgia oncológica, procedimentos, preparos e informações sobre a clínica. Como posso ajudar você hoje?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = useSendChatMessage();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, sendMessage.isPending]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || sendMessage.isPending) return;

    const userMsg = input.trim();
    const newHistory: ChatHistoryItem[] = [...history, { role: "user", content: userMsg }];
    
    setHistory(newHistory);
    setInput("");

    sendMessage.mutate({
      data: {
        message: userMsg,
        history: history.slice(-6) // Send last few messages for context
      }
    }, {
      onSuccess: (response) => {
        setHistory(prev => [...prev, { role: "assistant", content: response.reply }]);
      },
      onError: () => {
        setHistory(prev => [...prev, { role: "assistant", content: "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente." }]);
      }
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Tirar Dúvidas | Assistente de Cirurgia Oncológica</title>
        <meta name="description" content="Converse com nosso assistente virtual para tirar dúvidas sobre procedimentos, preparos e informações da clínica de cirurgia oncológica." />
      </Helmet>

      <div className="flex-1 flex flex-col h-[calc(100dvh-4rem)] max-w-4xl mx-auto w-full p-4">
        <div className="mb-6 mt-4 text-center">
          <h1 className="font-serif text-2xl md:text-3xl font-bold">Assistente Virtual</h1>
          <p className="text-muted-foreground text-sm">Respostas geradas por IA para dúvidas informativas.</p>
        </div>

        <div className="flex-1 overflow-y-auto rounded-xl border bg-card/50 shadow-sm p-4 md:p-6 space-y-6 flex flex-col mb-4">
          {history.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex gap-4 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                msg.role === "assistant" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
              }`}>
                {msg.role === "assistant" ? <Bot size={18} /> : <User size={18} />}
              </div>
              <div className={`p-4 rounded-2xl ${
                msg.role === "user" 
                  ? "bg-primary text-primary-foreground rounded-tr-sm" 
                  : "bg-muted text-foreground rounded-tl-sm"
              }`}>
                <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">{msg.content}</p>
              </div>
            </div>
          ))}
          {sendMessage.isPending && (
            <div className="flex gap-4 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">
                <Bot size={18} />
              </div>
              <div className="p-4 rounded-2xl bg-muted text-foreground rounded-tl-sm flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Digitando...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua dúvida aqui..."
            className="flex-1"
            disabled={sendMessage.isPending}
            data-testid="input-chat"
          />
          <Button type="submit" disabled={!input.trim() || sendMessage.isPending} data-testid="button-send-chat">
            <Send className="w-4 h-4" />
            <span className="sr-only">Enviar</span>
          </Button>
        </form>
        <p className="text-xs text-center text-muted-foreground mt-3">
          Aviso: Este assistente é uma Inteligência Artificial. As informações não substituem a consulta médica formal.
        </p>
      </div>
    </Layout>
  );
}