set shell := ["cmd.exe", "/c"]

setup:
	yarn install
	cd app && yarn install
	npm i commitizen -g
	cd api && conda env update -n humboldt --file environment.yml

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
