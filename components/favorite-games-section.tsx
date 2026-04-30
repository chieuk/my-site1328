import { Gamepad2 } from "lucide-react"

const games = [
  { name: "게임 1", description: "설명을 입력하세요" },
  { name: "게임 2", description: "설명을 입력하세요" },
]

export function FavoriteGamesSection() {
  return (
    <section id="favorite-games" className="mb-16">
      <div className="mb-6 flex items-center gap-2">
        <Gamepad2 className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          좋아하는 게임
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {games.map((game) => (
          <div
            key={game.name}
            className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-muted-foreground/30"
          >
            <h3 className="mb-2 text-lg font-medium text-foreground">
              {game.name}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {game.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
