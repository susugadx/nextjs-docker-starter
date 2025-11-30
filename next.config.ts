/** @type {import('next').NextConfig} */
const nextConfig = {
  // Docker本番ビルド用の設定
  output: 'standalone',
  
  // 画像最適化（Sharpを使用）
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // 環境変数の設定
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    REDIS_URL: process.env.REDIS_URL,
  },
}

module.exports = nextConfig
