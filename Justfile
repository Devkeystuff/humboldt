# Comment out this line if you're using Linux or MacOS
set shell := ["cmd.exe", "/c"]

setup:
	yarn install
	cd app && yarn install
	npm i commitizen -g
	cd api && python -m venv env

dev:
	docker-compose up -d
	cd app && yarn dev

stop:
	docker-compose down

format:
	yarn format
	black api

commit:
	cz
