import { Header } from "@/components/marketing/Header";
import { Hero } from "@/components/marketing/Hero";
import { HeroTwoColumn } from "@/components/marketing/HeroTwoColumn";
import { Section } from "@/components/marketing/Section";

export default function Page() {
  return (
    <div>
      <Header />
      
      <Section>
        <Hero />
      </Section>

      <Section className="bg-gray-50">
        <HeroTwoColumn />
      </Section>
    </div>
  );
}