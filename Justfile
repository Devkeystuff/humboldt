
setup:
	yarn install
	cd app && yarn install
	sudo apt update
	sudo apt install libpq-dev
	sudo apt install libssl-dev
	cp .vscode/settings.json.default .vscode/settings.json

dev:
	docker-compose up -d
	sh openapi-ts
	cd app && yarn dev

stop:
	docker-compose down

format:
	yarn format
	black api

commit:
	cz
