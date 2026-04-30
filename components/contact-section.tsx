import { Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="mb-16">
      <div className="mb-6 flex items-center gap-2">
        <Mail className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          연락처
        </h2>
      </div>

      <div className="rounded-lg border border-border bg-card p-5">
        <p className="mb-4 text-sm text-muted-foreground">
          이메일 확인이 늦을 수 있습니다.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
        >
          <Mail className="h-4 w-4" />
          <span>chieuk1328@gmail.com</span>
        </a>
      </div>
    </section>
  )
}
