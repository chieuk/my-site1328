import { Quote } from "lucide-react"

export function QuoteSection() {
  return (
    <section id="quote" className="mb-16">
      <div className="mb-6 flex items-center gap-2">
        <Quote className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          좋아하는 명언
        </h2>
      </div>

      <blockquote className="rounded-lg border-l-4 border-primary bg-card p-6">
        <p className="mb-2 text-lg italic leading-relaxed text-foreground">
          &quot;기억에 남는 삶을 살아라&quot;
        </p>
        <p className="mb-3 text-base italic leading-relaxed text-muted-foreground">
          &quot;Live a Life You Will Remember&quot;
        </p>
        <footer className="text-sm text-muted-foreground">— Avicii - The Nights 중</footer>
      </blockquote>
    </section>
  )
}
