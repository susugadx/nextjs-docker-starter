import { Button } from "@/components/app/ui/button";

export function Hero() {
  return (
    <div className="text-center max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        あなたのビジネスを加速させる
        <span className="text-blue-600"> Web制作</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mb-10">
        Next.js / Tailwind CSS / shadcn/ui を使用した高速で美しいWebサイトを。
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
          <a href="#contact">無料相談する</a>
        </Button>

        <Button size="lg" variant="outline" asChild>
          <a href="#feature">できることを見る</a>
        </Button>
      </div>
    </div>
  );
}