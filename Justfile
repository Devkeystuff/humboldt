
setup:
	yarn install
	cd app && yarn install
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
