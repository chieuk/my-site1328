export function Sidebar() {
  return (
    <aside className="flex flex-col gap-4 md:w-40 md:shrink-0">
      <nav className="flex flex-row flex-wrap gap-4 text-sm md:flex-col md:gap-2">
        <a
          href="#about"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          소개
        </a>
        <a
          href="#skills"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          특기
        </a>
        <a
          href="#quote"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          명언
        </a>
        <a
          href="#favorites"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          좋아하는 것
        </a>
        <a
          href="#awards"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          수상 경력
        </a>
        <a
          href="#contact"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          연락처
        </a>
      </nav>
      <div className="mt-4 hidden h-px w-full bg-border md:block" />
    </aside>
  )
}
