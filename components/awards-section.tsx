import { Award } from "lucide-react"

const awards = [
  {
    title: "End Portal In Nether Speedrun",
    year: "1st",
    description: "https://www.speedrun.com/mcu/runs/z023r28m",
  },
  {
    title: "Any% (Version Change)",
    year: "2nd",
    description: "https://www.speedrun.com/mcu/runs/z02e0o4m",
  }
]

export function AwardsSection() {
  return (
    <section id="awards" className="mb-16">
      <div className="mb-6 flex items-center gap-2">
        <Award className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          수상 및 성과
        </h2>
      </div>

      <div className="space-y-4">
        {awards.map((award) => (
          <div
            key={award.title}
            className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
          >            <span className="shrink-0 rounded bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
              {award.year}
            </span>
            <div>
              <h3 className="font-medium text-foreground">{award.title}</h3>
              <p className="text-sm text-muted-foreground">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
