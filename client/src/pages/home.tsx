import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import DnaSection from "@/components/dna-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import AchievementsSection from "@/components/achievements-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <DnaSection />
      <AboutSection />
      <ServicesSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
