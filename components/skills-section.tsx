const skills = [
  { name: "점프", description: "학교 천장이 닿일 만큼 점프를 할 수 있습니다." },
  { name: "달리기", description: "반에서 top5 안에 듭니다." },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="mb-6 text-xl font-semibold tracking-tight text-foreground">
        특기
      </h2>

      <div className="flex flex-col gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent"
          >
            <h3 className="mb-1 font-medium text-foreground">{skill.name}</h3>
            <p className="text-sm text-muted-foreground">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
