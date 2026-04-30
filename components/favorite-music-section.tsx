import { Music } from "lucide-react"

const music = [
  { name: "음악 1", description: "설명을 입력하세요" },
  { name: "음악 2", description: "설명을 입력하세요" },
]

export function FavoriteMusicSection() {
  return (
    <section id="favorite-music" className="mb-16">
      <div className="mb-6 flex items-center gap-2">
        <Music className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          좋아하는 음악
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {music.map((item) => (
          <div
            key={item.name}
            className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-muted-foreground/30"
          >
            <h3 className="mb-2 text-lg font-medium text-foreground">
              {item.name}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
