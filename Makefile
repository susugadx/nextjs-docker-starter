# ====================================
# Makefile - Docker Commands
# ====================================

.PHONY: help dev up down build logs clean shell

# デフォルトコマンド
help:
	@echo "利用可能なコマンド:"
	@echo "  make dev        - 開発環境起動"
	@echo "  make up         - バックグラウンドで起動"
	@echo "  make down       - 停止"
	@echo "  make build      - イメージを再ビルド"
	@echo "  make logs       - ログ表示"
	@echo "  make clean      - コンテナ削除"
	@echo "  make shell      - コンテナに入る"

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

# 完全クリーンアップ
clean:
	docker-compose down
	docker system prune -f

# シェルに入る
shell:
	docker-compose exec web sh
