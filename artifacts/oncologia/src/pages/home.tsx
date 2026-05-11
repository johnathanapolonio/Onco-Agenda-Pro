import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Dr. Johnathan Apolonio | Cirurgião Oncológico | Campo Largo e Araucária, PR</title>
        <meta name="description" content="Dr. Johnathan Gabriel Rodrigues Apolonio, cirurgião oncológico CRM-PR 41.248. Atendimento humanizado no Hospital do Rocio em Campo Largo e Clínica São Vicente em Araucária, Paraná." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden" style={{ background: "linear-gradient(160deg, #fdf8f2 0%, #f5f0e8 40%, #eef5f2 100%)" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #1a4a3c 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2d6a5a 0%, transparent 40%)" }} />
        <div className="container px-4 md:px-8 py-24 md:py-40 max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide"
          >
            CRM-PR 41.248 &nbsp;·&nbsp; RQE 39.480 — Cirurgia Oncológica
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif font-bold tracking-tight text-foreground leading-[1.05]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
          >
            Cuidado Humanizado<br />
            <span style={{ fontStyle: "normal" }}>em Cirurgia Oncológica</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Atendimento especializado no Hospital do Rocio em Campo Largo e na Clínica São Vicente em Araucária. Estamos aqui para guiar você com segurança e confiança.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link data-testid="button-agendar-hero" href="/agendar" className="inline-flex h-13 items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Agendar Consulta
            </Link>
            <a
              href="https://wa.me/554135524000"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp-hero"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-md border border-[#25D366] bg-[#25D366]/10 px-8 py-3 text-base font-semibold text-[#1a9e4a] transition-colors hover:bg-[#25D366]/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20 bg-secondary/30">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Dr. Johnathan Gabriel Rodrigues Apolonio</h2>
            <p className="text-sm font-medium text-primary tracking-wide uppercase">CRM-PR 41.248 &nbsp;|&nbsp; RQE 39.480 — Cirurgia Oncológica</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com formação sólida e dedicação exclusiva ao tratamento cirúrgico do câncer, o Dr. Johnathan Apolonio adota uma abordagem que enxerga o paciente por inteiro — não apenas a doença.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sua missão é proporcionar não apenas a excelência técnica exigida pela oncologia moderna, mas também o suporte humano fundamental para enfrentar este momento com segurança e confiança.
            </p>
          </div>
          <div className="flex-1 w-full max-w-md md:max-w-sm aspect-[3/4] overflow-hidden rounded-2xl shadow-lg relative">
            <img 
              src="/images/doctor.png" 
              alt="Retrato do cirurgião oncológico" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="w-full py-20 bg-background">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Especialidades Cirúrgicas</h2>
            <p className="text-muted-foreground text-lg">Áreas de atuação com foco na remoção segura e precisa de tumores.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cirurgia do Aparelho Digestivo", desc: "Tratamento cirúrgico de tumores de estômago, cólon, reto, fígado, pâncreas e vias biliares." },
              { title: "Cirurgia de Pele e Partes Moles", desc: "Abordagem para melanomas e sarcomas com margens seguras e reconstrução adequada." },
              { title: "Cirurgia Ginecológica Oncológica", desc: "Tratamento cirúrgico para câncer de ovário, útero e colo uterino." }
            ].map((spec, i) => (
              <Card key={i} className="bg-card border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-serif text-2xl font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold font-serif">{spec.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{spec.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="w-full py-20 bg-primary/5 border-y border-border">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Sinais de alerta que merecem atenção</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A detecção precoce é um dos fatores mais importantes para o sucesso do tratamento oncológico. Fique atento ao seu corpo e procure avaliação médica se notar:
            </p>
            <ul className="space-y-4 mt-6">
              {[
                "Nódulos ou caroços pelo corpo",
                "Perda de peso inexplicável e fadiga extrema",
                "Mudanças no funcionamento do intestino ou bexiga",
                "Feridas que não cicatrizam",
                "Sangramentos ou secreções anormais"
              ].map((sign, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold">!</span>
                  </div>
                  <span className="text-foreground font-medium">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full max-w-md aspect-video md:aspect-square overflow-hidden rounded-2xl shadow-lg relative">
            <img 
              src="/images/clinic.png" 
              alt="Área de espera acolhedora da clínica" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="w-full py-20 bg-background">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Locais de Atendimento</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O Dr. Johnathan Apolonio atende em dois hospitais de referência na região metropolitana de Curitiba, trazendo cuidado especializado mais próximo de você.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-4">
            <div className="rounded-xl border border-border bg-card p-8 text-left space-y-2 shadow-sm">
              <h3 className="font-bold text-lg font-serif text-foreground">Hospital do Rocio</h3>
              <p className="text-muted-foreground text-sm">Campo Largo, Paraná</p>
              <p className="text-primary font-medium text-sm">(41) 3136-2515</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 text-left space-y-2 shadow-sm">
              <h3 className="font-bold text-lg font-serif text-foreground">Clínica São Vicente</h3>
              <p className="text-muted-foreground text-sm">Araucária, Paraná</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 bg-secondary/30">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Depoimentos</h2>
            <p className="text-muted-foreground text-lg">Histórias de quem confiou em nosso cuidado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Médico muito dedicado, atencioso. Fui com medo de um diagnóstico e ele mostrou ser totalmente possível enfrentar essa terrível doença.",
                name: "Solange",
                city: "Araucária, PR"
              },
              {
                text: "Conheço o Dr. Johnathan desde a tenra idade. Sempre muito dedicado, extremamente honesto. Nunca o vi desistir diante de um desafio.",
                name: "Paciente",
                city: "Ivaiporã, PR"
              },
              {
                text: "Tive meu pai tratado por este cirurgião. Hoje, se tenho meu pai vivo ainda, foi porque Deus permitiu e porque este abençoado médico o operou.",
                name: "Familiar de paciente",
                city: "Curitiba, PR"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-background border-none shadow-sm">
                <CardContent className="p-8 space-y-6">
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-20 bg-secondary/30">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-serif text-3xl font-bold">Dúvidas Frequentes</h2>
            <p className="text-muted-foreground">Informações importantes sobre consultas e procedimentos.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium">Como me preparar para a primeira consulta?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Traga todos os seus exames recentes (laudos e imagens), relatórios de biópsias, lista de medicamentos em uso e um resumo do seu histórico médico. É recomendável vir acompanhado de um familiar de confiança.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium">A clínica atende convênios?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Atendemos de forma particular com fornecimento de nota fiscal para reembolso, além de alguns convênios selecionados. Entre em contato para verificar a cobertura do seu plano específico.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium">Como funciona o agendamento de cirurgias?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Após a indicação cirúrgica em consulta, o Dr. Johnathan Apolonio auxilia em todo o processo, realizando os procedimentos no Hospital do Rocio em Campo Largo ou na Clínica São Vicente em Araucária, conforme a melhor indicação para cada caso.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-8 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Estamos aqui para apoiar você.</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Dar o primeiro passo para o tratamento pode ser difícil, mas você não precisa caminhar sozinho.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agendar" className="inline-flex h-12 items-center justify-center rounded-md bg-background px-8 text-base font-medium text-primary shadow transition-colors hover:bg-background/90">
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}