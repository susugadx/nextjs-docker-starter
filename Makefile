# ====================================
# Makefile - Docker Commands
# ====================================

.PHONY: help dev up down build logs clean db-migrate db-reset

# デフォルトコマンド
help:
	@echo "利用可能なコマンド:"
	@echo "  make dev        - 開発環境起動（Next.js + DB + Redis）"
	@echo "  make up         - 全サービス起動"
	@echo "  make down       - 全サービス停止"
	@echo "  make build      - イメージを再ビルド"
	@echo "  make logs       - ログ表示"
	@echo "  make clean      - コンテナ・ボリューム削除"
	@echo "  make db-reset   - データベースリセット"

# 開発環境起動
dev:
	docker-compose up

# バックグラウンドで起動
up:
	docker-compose up -d

# 停止
down:
	docker-compose down

# 再ビルド
build:
	docker-compose build --no-cache

# ログ表示
logs:
	docker-compose logs -f

# Next.jsのログのみ
logs-web:
	docker-compose logs -f web

# DBのログのみ
logs-db:
	docker-compose logs -f db

# 完全クリーンアップ
clean:
	docker-compose down -v
	docker system prune -f

# DBリセット
db-reset:
	docker-compose down -v db
	docker-compose up -d db

# 本番ビルド
prod-build:
	docker-compose -f docker-compose.prod.yml build

# 本番起動
prod-up:
	docker-compose -f docker-compose.prod.yml up -d

# シェルに入る（Next.js）
shell:
	docker-compose exec web sh

# シェルに入る（DB）
shell-db:
	docker-compose exec db psql -U postgres -d nextjs_dev