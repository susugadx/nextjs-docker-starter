import { Header } from '@/components/marketing/Header'
import { Hero } from '@/components/marketing/Hero'
import { Footer } from '@/components/marketing/Footer'
import { Section } from '@/components/marketing/Section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PricingSection } from '@/components/marketing/PricingCard'

export default function PlaygroundPage() {
  return (
    <div className="space-y-16">
      {/* タイトル */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Playground</h1>
          <p className="text-gray-600">コンポーネントのデザイン確認用ページ</p>
        </div>
      </div>

      {/* Header */}
      <Section>
        <h2 className="text-2xl font-bold mb-4">Header</h2>
        <div className="border rounded-lg overflow-hidden">
          <Header 
            siteName="Test Site"
            ctaText="Get Started"
            ctaHref="/contact"
          />
        </div>
      </Section>

      {/* Hero */}
      <Section>
        <h2 className="text-2xl font-bold mb-4">Hero</h2>
        <div className="border rounded-lg overflow-hidden bg-white">
          <Hero
            title="Next.js Starter Kit"
            description="Build amazing web applications with Next.js, TypeScript, and Tailwind CSS"
          />
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section>
        <h2 className="text-2xl font-bold mb-4">Pricing Cards</h2>
        <div className="border rounded-lg overflow-hidden bg-gray-50">
          <PricingSection />
        </div>
      </Section>

      {/* Buttons */}
      <Section>
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </Section>

      {/* Form Elements */}
      <Section>
        <h2 className="text-2xl font-bold mb-4">Form Elements</h2>
        <div className="max-w-md space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="you@example.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Section>
        <h2 className="text-2xl font-bold mb-4">Footer</h2>
        <div className="border rounded-lg overflow-hidden">
          <Footer
            companyName="Test Company"
            description="Testing the footer component"
            githubUrl="https://github.com"
            twitterUrl="https://twitter.com"
            linkedinUrl="https://linkedin.com"
            year={2025}
          />
        </div>
      </Section>
    </div>
  )
}
