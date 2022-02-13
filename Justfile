
setup:
	yarn install
	cd app && yarn install
	sudo apt install libpq-dev
	sudo apt install libssl-dev
	cd api && python3 -m venv env
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
