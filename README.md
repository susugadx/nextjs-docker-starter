# Next.js Docker Starter Kit

軽量なNext.jsスターターキット（DB・認証なし）

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## 概要

Next.js 16をベースにした軽量スターターキットです。
DB・認証は含まれていません。必要に応じてプロジェクトごとに追加してください。

---

## 特徴

- **最新技術スタック** - Next.js 16, React 19, TypeScript
- **shadcn/ui完備** - 40個以上の高品質UIコンポーネント
- **Docker対応** - オプションでDocker環境を利用可能
- **軽量構成** - DB・認証なしのシンプルな構成

---

## 技術スタック

### フロントエンド
- **Next.js 16** - App Router, Server Components
- **React 19** - 最新のReact機能
- **TypeScript 5** - 型安全な開発
- **Tailwind CSS v4** - ユーティリティファーストCSS
- **shadcn/ui** - 高品質UIコンポーネント
- **Framer Motion** - アニメーション
- **Lucide React** - アイコンライブラリ

### 開発ツール
- **Docker & Docker Compose** - コンテナ化（オプション）
- **Turbopack** - 超高速ビルド
- **ESLint** - コード品質
- **React Compiler** - パフォーマンス最適化

---

## クイックスタート

### 必要な環境

- **Node.js 20+**
- **Docker Desktop**（オプション）

### セットアップ

```bash
# 1. リポジトリをクローン
git clone https://github.com/susugadx/nextjs-docker-starter.git
cd nextjs-docker-starter

# 2. 環境変数を設定
cp .env.example .env

# 3. 依存関係をインストール
npm install

# 4. 開発サーバー起動
npm run dev
```

ブラウザで http://localhost:3000 を開く

### Docker環境を使う場合

```bash
# Docker環境で起動
make dev

# または
docker-compose up
```

---

## 使い方

### npm コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start

# Lint実行
npm run lint

# Lint自動修正
npm run lint:fix
```

### Docker コマンド（Makefile）

```bash
make dev      # 開発環境起動
make up       # バックグラウンドで起動
make down     # 停止
make build    # イメージを再ビルド
make logs     # ログ表示
make clean    # コンテナ削除
make shell    # コンテナに入る
```

---

## プロジェクト構成

```
nextjs-docker-starter/
├── public/
│   └── images/                  # 画像ファイル
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── globals.css          # グローバルスタイル
│   │   ├── layout.tsx           # ルートレイアウト
│   │   ├── page.tsx             # トップページ
│   │   └── providers.tsx        # Providerラッパー
│   ├── components/
│   │   └── ui/                  # shadcn/uiコンポーネント（40+）
│   └── lib/
│       └── utils.ts             # ユーティリティ関数
├── docker-compose.yml           # Docker設定
├── Dockerfile.dev               # 開発用Dockerfile
├── Makefile                     # 便利コマンド
├── .env.example                 # 環境変数サンプル
└── README.md
```

---

## shadcn/ui コンポーネント

40個以上の高品質コンポーネントが利用可能：

**フォーム関連**
- Button, Input, Label, Form, Textarea
- Checkbox, Radio Group, Select, Switch

**レイアウト**
- Card, Sheet, Dialog, Drawer
- Tabs, Accordion, Collapsible

**ナビゲーション**
- Dropdown Menu, Navigation Menu
- Breadcrumb, Pagination

**フィードバック**
- Alert, Toast (Sonner), Progress, Skeleton

### コンポーネント追加

```bash
npx shadcn@latest add [component-name]

# 例
npx shadcn@latest add toast
npx shadcn@latest add data-table
```

---

## DB・認証を追加する場合

このスターターはDB・認証なしの軽量構成です。必要に応じて追加してください。

### Supabase を使う場合

```bash
npm install @supabase/supabase-js
```

### Prisma + PostgreSQL を使う場合

```bash
npm install prisma @prisma/client
npx prisma init
```

### NextAuth.js を使う場合

```bash
npm install next-auth
```

---

## デプロイ

### Vercel（推奨）

```bash
npm install -g vercel
vercel
```

---

## ライセンス

MIT License

---

**Happy Coding!**
