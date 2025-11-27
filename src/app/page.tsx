// src/app/page.tsx
import { HeroTwoColumn } from "@/components/marketing/HeroTwoColumn";
import { Hero } from "@/components/marketing/Hero";
import { Header } from "@/components/marketing/Header";

export default function Page() {
    return (
      <div>
        <main className="min-h-screen p-8">
        <Header />
        <Hero />
        <HeroTwoColumn />
        </main>
      </div>
    );
}
