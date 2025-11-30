# Next.js Docker Starter Kit

Web制作・SaaS開発両対応のスターターキット

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## 📋 概要

このプロジェクトは、Next.js 16をベースにしたモダンなWebアプリケーション開発用のスターターキットです。
シンプルなLP・コーポレートサイトから、本格的なSaaSアプリケーションまで対応できる柔軟な構成になっています。

Docker環境で統一された開発体験を提供し、チーム開発でも「俺の環境では動くけど...」問題を解決します。

---

## ✨ 特徴

- 🐳 **Docker完全対応** - 開発・本番環境の完全な分離
- ⚡ **最新技術スタック** - Next.js 16, React 19, TypeScript
- 🎨 **shadcn/ui完備** - 40個以上の高品質UIコンポーネント
- 🗄️ **データベース対応** - PostgreSQL + Redis
- 📱 **レスポンシブ対応** - モバイルファーストデザイン
- 🚀 **高速開発** - Turbopack, Hot Reload
- 🔧 **便利コマンド** - Makefile で簡単操作

---

## 🛠 技術スタック

### フロントエンド
- **Next.js 16** - App Router, Server Components
- **React 19** - 最新のReact機能
- **TypeScript** - 型安全な開発
- **Tailwind CSS v4** - ユーティリティファーストCSS
- **shadcn/ui** - 高品質UIコンポーネント
- **Framer Motion** - アニメーション
- **Lucide React** - アイコンライブラリ

### バックエンド・インフラ
- **PostgreSQL 16** - リレーショナルデータベース
- **Redis 7** - キャッシュ・セッション管理
- **Docker & Docker Compose** - コンテナ化
- **Go (Gin)** - 将来のAPI拡張用（準備済み）

### 開発ツール
- **Turbopack** - 超高速ビルド
- **ESLint** - コード品質
- **Prettier** - コードフォーマット

---

## 🚀 クイックスタート

### 必要な環境

- Docker Desktop
- Git
- Node.js 20+ (ローカル開発時)

### セットアップ

```bash
# 1. リポジトリをクローン
git clone https://github.com/susugadx/nextjs-docker-starter.git
cd nextjs-docker-starter

# 2. 環境変数を設定
cp .env.example .env

# 3. Docker環境を起動
make dev
```

ブラウザで http://localhost:3000 を開く

---

## 📖 使い方

### 基本コマンド

```bash
# 開発環境起動
make dev

# 停止
make down

# ログ確認
make logs

# コンテナに入る
make shell

# DBに接続
make shell-db

# 完全クリーンアップ
make clean
```

### Docker Composeコマンド

```bash
# 全サービス起動
docker-compose up

# バックグラウンドで起動
docker-compose up -d

# 特定のサービスだけ起動
docker-compose up web        # Next.jsのみ
docker-compose up web db     # Next.js + PostgreSQL

# 再ビルド
docker-compose build --no-cache

# 停止
docker-compose down

# ボリュームも削除
docker-compose down -v
```

### ローカル開発（Docker不使用）

```bash
npm install
npm run dev
```

---

## 📁 プロジェクト構成

```
nextjs-docker-starter/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── playground/         # コンポーネントテスト用
│   ├── components/
│   │   ├── marketing/          # マーケティング用コンポーネント
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Section.tsx
│   │   │   └── PricingCard.tsx
│   │   └── ui/                 # shadcn/ui コンポーネント
│   └── lib/                    # ユーティリティ関数
├── public/                     # 静的ファイル
├── docker-compose.yml          # Docker設定（開発用）
├── docker-compose.prod.yml     # Docker設定（本番用）
├── Dockerfile                  # 本番用Dockerfile
├── Dockerfile.dev              # 開発用Dockerfile
├── Dockerfile.go               # Go API用（将来用）
├── Makefile                    # 便利コマンド
├── .env.example                # 環境変数サンプル
└── README.md                   # このファイル
```

---

## 🎨 完成済みコンポーネント

### マーケティング系
- **Header** - ナビゲーション、CTA
- **Hero** - ヒーローセクション
- **Footer** - 4カラムレイアウト、SNSリンク
- **Section** - ラッパーコンポーネント
- **PricingCard** - 3カラム料金表

### UI系（shadcn/ui）
40個以上のコンポーネントが利用可能：
- Button, Input, Label, Form, Textarea
- Card, Dialog, Drawer, Sheet
- Dropdown, Select, Popover, Tooltip
- Table, Tabs, Accordion
- Alert, Badge, Avatar, Skeleton
- その他多数...

---

## 🔧 環境変数

`.env.example` をコピーして `.env` を作成してください。

### 主要な環境変数

```env
# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/nextjs_dev
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=nextjs_dev

# Redis
REDIS_URL=redis://localhost:6379

# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NODE_ENV=development

# AI / OpenAI (将来用)
OPENAI_API_KEY=your_key_here
```

---

## 🐳 Docker構成

### サービス一覧

| サービス | ポート | 説明 |
|---------|--------|------|
| web | 3000 | Next.js アプリケーション |
| db | 5433 | PostgreSQL データベース |
| redis | 6379 | Redis キャッシュ |

### ボリューム

- `postgres_data` - データベースの永続化
- `redis_data` - Redisデータの永続化

---

## 📦 shadcn/ui コンポーネント追加

新しいコンポーネントを追加する場合：

```bash
npx shadcn@latest add [component-name]

# 例
npx shadcn@latest add toast
npx shadcn@latest add calendar
```

---

## 🚀 デプロイ

### Vercel (Next.js)

```bash
# Vercel CLI でデプロイ
vercel

# または GitHub連携で自動デプロイ
```

### Railway (PostgreSQL + Redis)

1. Railway アカウント作成
2. PostgreSQL & Redis サービス追加
3. 環境変数を設定

### 本番用Dockerビルド

```bash
# 本番用ビルド
docker-compose -f docker-compose.prod.yml build

# 本番環境起動
docker-compose -f docker-compose.prod.yml up -d
```

---

## 🤝 貢献

Issue や Pull Request 歓迎です！

1. Fork する
2. Feature ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. Commit する (`git commit -m 'Add amazing feature'`)
4. Push する (`git push origin feature/amazing-feature`)
5. Pull Request を作成

---

## 📄 ライセンス

MIT License - 自由に使ってください

---

## 🙏 謝辞

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Docker](https://www.docker.com/)

---

## 📞 サポート

問題や質問がある場合は、[Issue](https://github.com/susugadx/nextjs-docker-starter/issues) を作成してください。

---

**Happy Coding! 🎉**