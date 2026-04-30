const profileData = [
  { label: "생년월일", value: "2013년 2월 8일" },
  { label: "혈액형", value: "A+" },
  { label: "학교", value: "안동중학교" },
  { label: "거주지", value: "경상북도 안동시" },
  { label: "MBTI", value: "ISTP" },
  { label: "", value: "" },
  { label: "chess", value: "chess.com/member/chieuk/stats" },
  { label: "", value: "" },
  { label: "tetrio", value: "ch.tetr.io/u/chieuk" },
]

export function AboutSection() {
  return (
    <section id="about" className="mb-16">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        신지훈 - TEST
      </h1>

      <div className="mb-8 rounded-lg border border-border bg-card p-5">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          프로필
        </h2>
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {profileData.map((item) => (
            <div key={item.label} className="flex flex-col">
              <dt className="text-xs font-medium text-muted-foreground">
                {item.label}
              </dt>
              <dd className="text-sm text-foreground">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>
          안녕하세요!
        </p>
      </div>
    </section>
  )
}
