#!/bin/bash
docker-compose up -d
docker exec -it dev-db sh -c "psql -U postgres_dev_user humboldt_dev_db -c \"DROP SCHEMA public CASCADE;\""
docker exec -it dev-db sh -c "psql -U postgres_dev_user humboldt_dev_db -c \"CREATE SCHEMA public;\""
docker exec -it dev-db sh -c "psql -U postgres_dev_user humboldt_dev_db -c \"GRANT ALL ON SCHEMA public TO postgres_dev_user;\""
docker exec -it dev-db sh -c "psql -U postgres_dev_user humboldt_dev_db -c \"GRANT ALL ON SCHEMA public TO public;\""
docker-compose down