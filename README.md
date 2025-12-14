# 創作料理 笑場（Waraba）公式サイト

北海道帯広市の創作料理店「笑場（わらば）」の公式Webサイト

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## 📋 概要

和食と中華の創作料理を提供する「笑場」の公式サイトです。
「笑顔になっていただける場所」というコンセプトのもと、温かみのあるモダンなデザインで店舗の魅力を発信します。

### 店舗情報

- **店舗名**: 創作料理 笑場（わらば）
- **所在地**: 〒080-2469 北海道帯広市西19条南3丁目36-13
- **電話番号**: 0155-67-1658
- **現行サイト**: https://waraba-obihiro.com/

---

## ✨ 特徴

- 🎨 **温かみのあるモダン和中デザイン** - ダークトーン × 朱色アクセント
- 📱 **モバイルファースト** - スマートフォンでの閲覧を重視
- ⚡ **高速表示** - Next.js App Router + Turbopack
- 🍽️ **メニュー表示** - ランチ・ディナーメニューを見やすく掲載
- 📍 **アクセス情報** - Googleマップ埋め込み対応
- 🔗 **外部サービス連携** - Wolt / 食べログ / 出前館 / Instagram

---

## 🛠 技術スタック

### フロントエンド
- **Next.js 16** - App Router, Server Components
- **React 19** - 最新のReact機能
- **TypeScript 5** - 型安全な開発
- **Tailwind CSS v4** - ユーティリティファーストCSS
- **shadcn/ui** - 高品質UIコンポーネント
- **Framer Motion** - アニメーション

### フォント
- **Noto Serif JP** - 見出し用（明朝系）
- **Noto Sans JP** - 本文用（ゴシック系）

### インフラ
- **Docker & Docker Compose** - 開発環境
- **Turbopack** - 高速ビルド

---

## 🚀 クイックスタート

### 必要な環境

- **Docker Desktop** (推奨)
- **Node.js 20+** (ローカル開発時)

### セットアップ

```bash
# 1. リポジトリをクローン
git clone https://github.com/your-repo/waraba.git
cd waraba

# 2. 環境変数を設定
cp .env.example .env

# 3. Docker環境を起動
make dev
```

ブラウザで http://localhost:3000 を開く

---

## 📁 サイト構成

```
/                    → TOPページ
/commit              → 笑場のこだわり
/lunch               → ランチメニュー
/dinner              → ディナーメニュー
/storeinfo           → お店について
```

---

## 📖 開発コマンド

### Makefile

```bash
make dev       # 開発環境起動
make down      # 停止
make logs      # ログ確認
make shell     # コンテナに入る
make clean     # 完全クリーンアップ
```

### npm scripts

```bash
npm run dev      # 開発サーバー起動
npm run build    # ビルド
npm start        # 本番サーバー起動
npm run lint     # Lint実行
npm run lint:fix # Lint自動修正
```

---

## 🎨 デザイントークン

### カラーパレット

| 用途 | カラー | コード |
|------|--------|--------|
| メイン背景 | ダークグレー | `#1a1a1a` |
| セカンダリ背景 | グレー | `#2d2d2d` |
| メインテキスト | オフホワイト | `#F5F5F0` |
| メインアクセント | 朱色 | `#D4442E` |
| サブアクセント | 琥珀 | `#E07B39` |
| ゴールド | ゴールド | `#C9A86C` |

---

## 📁 ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # TOPページ
│   ├── globals.css         # グローバルスタイル
│   ├── commit/             # こだわりページ
│   ├── lunch/              # ランチページ
│   ├── dinner/             # ディナーページ
│   └── storeinfo/          # 店舗情報ページ
├── components/
│   ├── layout/             # Header, Footer, MobileNav
│   ├── ui/                 # shadcn/ui コンポーネント
│   ├── menu/               # メニュー関連
│   ├── media/              # YouTube, GoogleMap等
│   └── common/             # 共通コンポーネント
├── lib/                    # ユーティリティ関数
├── data/                   # メニュー・店舗データ
└── types/                  # 型定義
```

---

## 🔗 外部サービス連携

- **Wolt**: https://wolt.com/ja/jpn/obihiro/restaurant/waraba
- **食べログ**: https://tabelog.com/hokkaido/A0111/A011101/1076472/
- **出前館**: https://demae-can.com/shop/menu/3347980
- **Instagram**: https://www.instagram.com/waraba.obihiro/

---

## 📅 今後の予定

- [ ] microCMS連携（メニュー更新の効率化）
- [ ] LINEミニアプリ連携（オンライン予約）

---

## 📄 ライセンス

MIT License

---

**創作料理 笑場 - 和と中華、笑顔が生まれる場所**
