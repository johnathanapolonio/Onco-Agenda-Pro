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
      <section
        className="relative w-full min-h-screen overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f0c09 0%, #131008 40%, #0c1210 100%)" }}
      >
        {/* ── Artistic light painting ── */}
        {/* Warm amber spotlight — upper right, behind the photo */}
        <div className="absolute pointer-events-none" style={{ width: "900px", height: "900px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,140,60,0.18) 0%, rgba(160,100,30,0.08) 35%, transparent 65%)", top: "-15%", right: "-5%", filter: "blur(2px)" }} />
        {/* Gold rim light along the right edge */}
        <div className="absolute pointer-events-none" style={{ width: "3px", height: "70%", background: "linear-gradient(to bottom, transparent, rgba(210,160,70,0.35), rgba(210,160,70,0.5), rgba(210,160,70,0.2), transparent)", top: "15%", right: "44.5%", filter: "blur(6px)" }} />
        {/* Deep teal/green cinematic fill — left side */}
        <div className="glow-orb absolute pointer-events-none" style={{ width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(18,60,45,0.55) 0%, transparent 65%)", bottom: "-10%", left: "-10%" }} />
        {/* Soft warm haze center-left, behind text */}
        <div className="glow-orb absolute pointer-events-none" style={{ width: "500px", height: "400px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(100,65,20,0.12) 0%, transparent 70%)", top: "30%", left: "5%", animationDelay: "1.5s" }} />
        {/* Very subtle film grain texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.018]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Bottom section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #131008)" }} />

        {/* ── Photo — absolutely fills the right half, from very top ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute top-0 right-0 bottom-0 hidden md:block"
          style={{ width: "46%" }}
        >
          <img
            src="/images/dr-apolonio.png"
            alt="Dr. Johnathan Gabriel Rodrigues Apolonio — Cirurgião Oncológico"
            className="w-full h-full object-cover object-top"
            loading="eager"
            width="700"
            height="900"
          />
          {/* Left edge gradient — melts into background */}
          <div className="absolute inset-y-0 left-0 pointer-events-none" style={{ width: "45%", background: "linear-gradient(to right, #0f0c09, rgba(15,12,9,0.6), transparent)" }} />
          {/* Top edge gradient */}
          <div className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: "12%", background: "linear-gradient(to bottom, #0f0c09, transparent)" }} />
          {/* Bottom edge gradient */}
          <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ height: "35%", background: "linear-gradient(to top, #131008, rgba(19,16,8,0.7), transparent)" }} />
          {/* Warm amber rim — left side of photo, simulates studio light */}
          <div className="absolute inset-y-0 left-0 pointer-events-none" style={{ width: "2px", background: "linear-gradient(to bottom, transparent 10%, rgba(210,160,70,0.6) 40%, rgba(210,160,70,0.4) 60%, transparent 90%)", filter: "blur(4px)" }} />
        </motion.div>

        {/* ── Left text content ── */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="max-w-xl flex flex-col gap-7 py-28 md:py-0">

              {/* CRM badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium w-fit"
                style={{ border: "1px solid rgba(184,147,90,0.35)", background: "rgba(184,147,90,0.07)", color: "#c9a96e", letterSpacing: "0.1em" }}
              >
                CRM-PR 41.248 &nbsp;·&nbsp; RQE 39.480 &nbsp;·&nbsp; Cirurgia Oncológica
              </motion.div>

              {/* Main heading — calligraphic font */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="leading-[1.1] text-white"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.05,
                }}
              >
                Cirurgia Oncológica
                <span
                  className="block mt-3"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontWeight: 400,
                    fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                    color: "rgba(255,255,255,0.65)",
                    letterSpacing: "0.01em",
                  }}
                >
                  com Cuidado Humanizado
                </span>
              </motion.h1>

              {/* Doctor name with shimmer + animated line */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.38 }}
                className="flex flex-col items-start gap-2"
              >
                <span
                  className="shimmer-name font-semibold tracking-wide"
                  style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Dr. Johnathan Gabriel Rodrigues Apolonio
                </span>
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0, height: "1px", width: "160px", background: "linear-gradient(90deg, #c9a96e 0%, rgba(201,169,110,0.3) 70%, transparent 100%)" }}
                />
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.52 }}
                className="text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)", maxWidth: "380px" }}
              >
                Atendimento especializado no Hospital do Rocio em Campo Largo e na Clínica São Vicente em Araucária.
              </motion.p>

              {/* WhatsApp CTA — large and prominent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.68 }}
              >
                <a
                  href="https://wa.me/554135524000"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-whatsapp-hero"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl font-bold transition-all"
                  style={{
                    background: "linear-gradient(135deg, #1db954, #25D366, #1ea550)",
                    color: "#fff",
                    fontSize: "1.15rem",
                    padding: "1rem 2.2rem",
                    boxShadow: "0 0 0 0 rgba(37,211,102,0.5)",
                    animation: "whatsapp-cta-pulse 2.2s ease-in-out infinite",
                    letterSpacing: "0.01em",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Fale pelo WhatsApp
                </a>
                <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.32)" }}>
                  (41) 3552-4000 · Clínica São Vicente — Araucária
                </p>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Credential badge — bottom-right over photo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="absolute bottom-8 right-8 px-5 py-3 rounded-xl text-center hidden md:block z-20"
          style={{ background: "rgba(15,12,9,0.78)", backdropFilter: "blur(14px)", border: "1px solid rgba(184,147,90,0.28)", minWidth: "230px" }}
        >
          <p className="shimmer-name font-semibold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Dr. Johnathan G. R. Apolonio
          </p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Cirurgião Oncológico · CRM-PR 41.248</p>
        </motion.div>

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
            <div className="pt-2 space-y-3">
              <p className="text-sm font-semibold text-foreground uppercase tracking-widest">Formação</p>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed">Medicina — Pontifícia Universidade Católica do Paraná (PUCPR)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed">Residência Médica em Cirurgia Oncológica — Hospital do Rocio, Campo Largo, PR</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md md:max-w-sm aspect-[3/4] overflow-hidden rounded-2xl shadow-lg relative">
            <img 
              src="/images/dr-apolonio-cirurgia.png" 
              alt="Dr. Johnathan Gabriel Rodrigues Apolonio — Cirurgião Oncológico" 
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
              width="400"
              height="533"
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