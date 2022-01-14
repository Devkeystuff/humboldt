setup:
	cd app && yarn install
	cd api && conda env update -n humboldt --file environment.yml
	npm i commitizen -g
	just conda


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

conda:
	start conda activate humboldt