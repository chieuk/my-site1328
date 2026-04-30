import { AboutSection } from "@/components/about-section"
import { AwardsSection } from "@/components/awards-section"
import { ContactSection } from "@/components/contact-section"
import { FavoriteSection } from "@/components/favorite-section"
import { QuoteSection } from "@/components/quote-section"
import { Sidebar } from "@/components/sidebar"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <Sidebar />
          <div className="flex-1">
            <AboutSection />
            <QuoteSection />
            <SkillsSection />
            <FavoriteSection />
            <AwardsSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  )
}
