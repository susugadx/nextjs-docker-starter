import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

// 型定義
type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline" | "secondary";
  popular?: boolean;
};

// プライシングカードコンポーネント
function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative rounded-2xl border ${
        plan.popular
          ? "border-blue-600 shadow-xl shadow-blue-100"
          : "border-gray-200"
      } bg-white p-8 transition-all hover:shadow-lg`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
          人気プラン
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
        <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
          {plan.period && (
            <span className="ml-1 text-gray-600">{plan.period}</span>
          )}
        </div>
      </div>

      <Button variant={plan.buttonVariant} className="mb-8 w-full">
        {plan.buttonText}
      </Button>

      <div className="space-y-3">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// プライシングセクション
export function PricingSection() {
  const pricingPlans: PricingPlan[] = [
    {
      name: "Free",
      price: "¥0",
      period: "/月",
      description: "個人開発や小規模プロジェクトに最適",
      features: [
        "基本機能へのアクセス",
        "月間1,000リクエスト",
        "コミュニティサポート",
        "基本的なテンプレート",
      ],
      buttonText: "無料で始める",
      buttonVariant: "outline",
    },
    {
      name: "Pro",
      price: "¥2,980",
      period: "/月",
      description: "プロフェッショナル向けの完全な機能セット",
      features: [
        "すべての機能へのアクセス",
        "月間50,000リクエスト",
        "優先メールサポート",
        "プレミアムテンプレート",
        "高度な分析機能",
        "カスタムドメイン",
      ],
      buttonText: "今すぐ始める",
      buttonVariant: "default",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "¥9,800",
      period: "/月",
      description: "大規模チームやエンタープライズ向け",
      features: [
        "無制限のリクエスト",
        "専任サポート担当",
        "SLA保証",
        "カスタム統合",
        "専用インフラ",
        "オンボーディング支援",
      ],
      buttonText: "今すぐ始める",
      buttonVariant: "secondary",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* ヘッダーセクション */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            シンプルで明確な料金プラン
          </h2>
          <p className="text-lg text-gray-600">
            あなたのニーズに合ったプランをお選びください
          </p>
        </div>

        {/* プライシングカードグリッド */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* 追加情報 */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            すべてのプランに30日間の返金保証が付いています
          </p>
        </div>
      </div>
    </div>
  );
}
