# Next.js Docker Starter Kit

Web制作・SaaS開発両対応のモダンスターターキット

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
- 🔐 **認証システム** - NextAuth.js統合済み
- 🗄️ **データベース対応** - PostgreSQL + Prisma ORM
- 📱 **レスポンシブ対応** - モバイルファーストデザイン
- 🚀 **高速開発** - Turbopack, Hot Reload
- 🔧 **便利コマンド** - Makefile で簡単操作

---

## 🛠 技術スタック

### フロントエンド
- **Next.js 16** - App Router, Server Components
- **React 19** - 最新のReact機能
- **TypeScript 5** - 型安全な開発
- **Tailwind CSS v4** - ユーティリティファーストCSS
- **shadcn/ui** - 高品質UIコンポーネント
- **Framer Motion** - アニメーション
- **Lucide React** - アイコンライブラリ

### バックエンド・データベース
- **NextAuth.js** - 認証システム
- **Prisma** - タイプセーフなORM
- **PostgreSQL 16** - リレーショナルデータベース
- **Redis 7** - キャッシュ・セッション管理（準備済み）

### インフラ・開発ツール
- **Docker & Docker Compose** - コンテナ化
- **Turbopack** - 超高速ビルド
- **ESLint** - コード品質
- **React Compiler** - パフォーマンス最適化

---

## 🚀 クイックスタート

### 必要な環境

- **Docker Desktop** (推奨)
- **Git**
- **Node.js 20+** (ローカル開発時)

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

### 基本コマンド（Makefile）

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
# 依存関係をインストール
npm install

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

---

## 📁 プロジェクト構成

```
nextjs-docker-starter/
├── prisma/
│   ├── migrations/              # DBマイグレーション履歴
│   └── schema.prisma            # Prismaスキーマ定義
├── public/
│   ├── images/                  # 画像ファイル
│   └── *.svg                    # SVGアイコン
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...nextauth]/
│   │   │           └── route.ts # NextAuth.jsエンドポイント
│   │   ├── auth/
│   │   │   └── signin/
│   │   │       └── page.tsx     # サインインページ
│   │   ├── globals.css          # グローバルスタイル
│   │   ├── layout.tsx           # ルートレイアウト
│   │   ├── page.tsx             # トップページ
│   │   └── providers.tsx        # Providerラッパー
│   ├── components/
│   │   ├── auth/                # 認証関連コンポーネント（準備済み）
│   │   ├── marketing/           # マーケティング用コンポーネント
│   │   │   ├── Header.tsx       # ヘッダーナビゲーション
│   │   │   ├── Footer.tsx       # フッター（4カラムレイアウト）
│   │   │   └── Section.tsx      # セクションラッパー
│   │   └── ui/                  # shadcn/uiコンポーネント（40+）
│   └── lib/
│       ├── prisma.ts            # Prismaクライアント設定
│       └── utils.ts             # ユーティリティ関数
├── components.json              # shadcn/ui設定
├── docker-compose.yml           # Docker設定（開発用）
├── docker-compose.prod.yml      # Docker設定（本番用）
├── Dockerfile                   # 本番用Dockerfile
├── Dockerfile.dev               # 開発用Dockerfile
├── Dockerfile.go                # Go API用（将来用）
├── Makefile                     # 便利コマンド定義
├── .env.example                 # 環境変数サンプル
├── next.config.ts               # Next.js設定
├── tailwind.config.js           # Tailwind CSS設定
├── tsconfig.json                # TypeScript設定
└── README.md                    # このファイル
```

---

## 🎨 完成済みコンポーネント

### マーケティング系（src/components/marketing）

- **Header** - ナビゲーション、CTAボタン付き
- **Footer** - 4カラムレイアウト、SNSリンク、著作権表示
- **Section** - 統一されたセクションラッパー

### UI系（src/components/ui - shadcn/ui）

40個以上の高品質コンポーネントが利用可能：

**フォーム関連**
- Button, Input, Label, Form, Textarea
- Checkbox, Radio Group, Select, Switch
- Input OTP, Calendar, Date Picker

**レイアウト**
- Card, Sheet, Dialog, Drawer
- Tabs, Accordion, Collapsible
- Resizable, Scroll Area, Separator

**ナビゲーション**
- Dropdown Menu, Context Menu, Menubar
- Navigation Menu, Breadcrumb, Pagination

**フィードバック**
- Alert, Alert Dialog, Toast (Sonner)
- Progress, Skeleton, Badge, Avatar

**オーバーレイ**
- Popover, Tooltip, Hover Card
- Command (⌘K Menu)

**データ表示**
- Table, Carousel, Aspect Ratio
- Charts (Recharts統合)

**その他**
- Toggle, Toggle Group, Slider

---

## 🔐 認証システム（NextAuth.js）

### 設定済み機能

- ✅ NextAuth.js v4統合
- ✅ Prisma Adapter設定
- ✅ サインインページ（`/auth/signin`）
- ✅ APIルート（`/api/auth/[...nextauth]`）
- ✅ セッション管理

### 使用方法

```tsx
import { useSession, signIn, signOut } from 'next-auth/react'

function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return <button onClick={() => signIn()}>Sign in</button>
}
```

認証プロバイダーの追加は `src/app/api/auth/[...nextauth]/route.ts` で設定してください。

---

## 🗄️ データベース（Prisma + PostgreSQL）

### Prismaコマンド

```bash
# マイグレーション作成
npx prisma migrate dev --name migration_name

# DBをリセット
npx prisma migrate reset

# Prisma Studioを開く
npx prisma studio

# スキーマを適用（本番）
npx prisma migrate deploy

# Prisma Clientを再生成
npx prisma generate
```

### スキーマ編集

`prisma/schema.prisma` を編集してモデルを定義してください。

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

# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Redis（準備済み）
REDIS_URL=redis://localhost:6379

# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NODE_ENV=development
```

**本番環境では必ず環境変数を適切に設定してください。**

---

## 🐳 Docker構成

### サービス一覧

| サービス | ポート | 説明 |
|---------|--------|------|
| web | 3000 | Next.js アプリケーション |
| db | 5433 | PostgreSQL データベース |
| redis | 6379 | Redis キャッシュ（準備済み） |

### ボリューム

- `postgres_data` - データベースの永続化
- `redis_data` - Redisデータの永続化

### ネットワーク

- `app-network` - サービス間通信用

---

## 📦 shadcn/ui コンポーネント追加

新しいコンポーネントを追加する場合：

```bash
# 個別追加
npx shadcn@latest add [component-name]

# 例
npx shadcn@latest add toast
npx shadcn@latest add data-table

# 複数同時追加
npx shadcn@latest add toast calendar date-picker
```

追加されたコンポーネントは `src/components/ui/` に配置されます。

---

## 🚀 デプロイ

### Vercel（推奨）

```bash
# Vercel CLI でデプロイ
npm install -g vercel
vercel

# または GitHub連携で自動デプロイ
# 1. GitHubリポジトリをVercelに連携
# 2. 環境変数を設定
# 3. 自動デプロイ開始
```

### Railway（PostgreSQL + Redis）

1. [Railway](https://railway.app/) アカウント作成
2. PostgreSQL & Redis サービス追加
3. 環境変数を設定
4. `DATABASE_URL` と `REDIS_URL` をVercelに設定

### 本番用Dockerビルド

```bash
# 本番用ビルド
docker-compose -f docker-compose.prod.yml build

# 本番環境起動
docker-compose -f docker-compose.prod.yml up -d

# ログ確認
docker-compose -f docker-compose.prod.yml logs -f
```

---

## 🛠 開発ルール

### ディレクトリ構成ルール

```
src/
├── app/              # ページとルーティング（App Router）
├── components/       # 再利用可能なコンポーネント
│   ├── ui/          # shadcn/ui（自動生成、必要に応じてカスタマイズ）
│   ├── marketing/   # マーケティング用
│   └── auth/        # 認証関連
├── lib/             # ユーティリティ・ヘルパー関数
└── types/           # 型定義（必要に応じて作成）
```

### コーディング規約

**TypeScript**
- 明示的な型定義を使用
- `any`の使用は最小限に
- インターフェースよりも型エイリアスを優先（一貫性のため）

**React**
- Server Componentsをデフォルトに
- Client Componentsは必要な場合のみ（`'use client'`）
- カスタムフックは `use` プレフィックス

**スタイリング**
- Tailwind CSSユーティリティクラス優先
- カスタムCSSは `globals.css` またはCSS Modules
- `cn()` ヘルパーで条件付きクラス適用

**ファイル命名**
- コンポーネント: `PascalCase.tsx`
- ユーティリティ: `camelCase.ts`
- ページ: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`

### Gitワークフロー

```bash
# 1. 新機能用ブランチ作成
git checkout -b feature/feature-name

# 2. 変更をコミット
git add .
git commit -m "feat: add feature description"

# 3. プッシュ
git push origin feature/feature-name

# 4. Pull Request作成
```

**コミットメッセージ規約**
- `feat:` - 新機能
- `fix:` - バグ修正
- `docs:` - ドキュメント変更
- `style:` - コードスタイル変更（機能に影響なし）
- `refactor:` - リファクタリング
- `test:` - テスト追加・修正
- `chore:` - ビルド・設定変更

---

## 🧪 テスト（準備中）

現在のバージョンではテストは含まれていませんが、以下の追加を推奨します：

```bash
# Jest + React Testing Library
npm install -D jest @testing-library/react @testing-library/jest-dom

# Playwright（E2Eテスト）
npm install -D @playwright/test
```

---

## 🔄 アップデート

### パッケージ更新

```bash
# 依存関係の更新確認
npm outdated

# パッケージ更新
npm update

# メジャーバージョン更新（注意）
npm install package-name@latest
```

### Next.js更新

```bash
# Next.js最新版へ更新
npm install next@latest react@latest react-dom@latest

# 破壊的変更を確認
# https://nextjs.org/docs/upgrading
```

---

## 🤝 貢献

Issue や Pull Request 歓迎です！

1. このリポジトリをFork
2. Featureブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をCommit (`git commit -m 'feat: add amazing feature'`)
4. ブランチをPush (`git push origin feature/amazing-feature`)
5. Pull Requestを作成

---

## 📄 ライセンス

MIT License - 自由に使ってください

---

## 🙏 謝辞

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [shadcn/ui](https://ui.shadcn.com/) - UIコンポーネント
- [Tailwind CSS](https://tailwindcss.com/) - CSSフレームワーク
- [Prisma](https://www.prisma.io/) - ORMツール
- [NextAuth.js](https://next-auth.js.org/) - 認証ライブラリ
- [Docker](https://www.docker.com/) - コンテナ化プラットフォーム

---

## 📞 サポート

問題や質問がある場合は、[Issue](https://github.com/susugadx/nextjs-docker-starter/issues) を作成してください。

---

**Happy Coding! 🎉**
