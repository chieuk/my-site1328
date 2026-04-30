import { Heart } from "lucide-react"

export function FavoriteSection() {
  const favorites = [
    {
      category: "음식",
      item: "스테이크",
      description: "서양 음식을 좋아합니다.",
    },
    {
      category: "게임",
      item: "체스",
      description: "머리를 쓰고 이겼을때 기분이 좋습니다.",
    },
    {
      category: "음악",
      item: "Avicii - The Nights",
      description: "인생을 담은 노래입니다.",
    },
  ]

  return (
    <section id="favorites" className="mb-16">
      <div className="mb-8 flex items-center gap-2">
        <Heart className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          좋아하는 것들
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {favorites.map((fav) => (
          <div
            key={fav.category}
            className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-muted-foreground/30"
          >
            <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {fav.category}
            </span>
            <h3 className="mb-2 text-lg font-medium text-foreground">
              {fav.item}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {fav.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
