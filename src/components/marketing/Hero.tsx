import { Button } from "@/components/ui/button";

type HeroProps = {
  title: string;
  description: string;
};

export function Hero({ title, description }: HeroProps) {
  return (
    <div className="text-center max-w-5xl mx-auto py-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        <span className="text-blue-600">{title}</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mb-10">
        {description}
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