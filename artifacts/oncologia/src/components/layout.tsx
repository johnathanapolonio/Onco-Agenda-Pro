import { Link } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-serif text-xl font-bold tracking-tight text-primary">
              Dr. Silva
            </div>
            <span className="hidden md:inline-block text-sm text-muted-foreground border-l border-border pl-2 ml-2">
              Cirurgia Oncológica
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-primary">Início</Link>
            <Link href="/agendar" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Agendar Consulta
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
      <footer className="border-t border-border bg-secondary/30 mt-auto">
        <div className="container px-4 md:px-8 py-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-serif text-lg font-bold text-primary mb-4">Dr. Silva</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cirurgia Oncológica em Campo Largo, Paraná. Tratamento humanizado e acolhimento em momentos de vulnerabilidade.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Rua Exemplo, 123 - Centro</li>
              <li>Campo Largo, PR - 83601-000</li>
              <li>(41) 99999-9999</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground flex flex-col">
              <Link href="/agendar" className="hover:text-primary transition-colors w-fit">Agendar Consulta</Link>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-6">
          <div className="container text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Clínica de Cirurgia Oncológica. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}