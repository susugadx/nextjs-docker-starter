export function HeroTwoColumn() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-none px-12 grid md:grid-cols-2 gap-12 items-center w-full">

        {/* 左側（テキスト） */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            あなたのサービスをもっと魅力的に伝える
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            LPや企業サイトで使える、2カラム型のHeroセクションです。
            テキストと画像を並べることで視認性と訴求力が上がります。
          </p>

          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
            お問い合わせ
          </button>
        </div>

        {/* 右側（画像） */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/hero-sample.jpg"
            alt="サービスのイメージ画像"
            className="w-[350px] h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
