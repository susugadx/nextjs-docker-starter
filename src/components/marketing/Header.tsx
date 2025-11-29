import Link from 'next/link'
import { Button } from '@/components/app/ui/button'

type HeaderProps = {
  siteName: string;
  ctaText: string;
  ctaHref: string;
};

export function Header({
    siteName, 
    ctaText, 
    ctaHref,
  }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* ロゴ */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">{siteName}</span>
        </Link>

        {/* ナビゲーション */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* CTA ボタン */}
        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}