SHELL := /bin/bash

RED := \033[31m
GREEN := \033[32m
YELLOW := \033[33m
RESET := \033[39m
ARROW := \033[1m$(RED)>$(GREEN)>$(YELLOW)>$(RESET)


node_modules:
	@ echo -e "${ARROW} Install node dependencies..."
	pnpm install

docker/config/traefik/certs:
	@ echo -e "${ARROW} Create certs folder..."
	mkdir docker/config/traefik/certs

install-dependencies:
	chmod +x install-dependencies.sh
	@./install-dependencies.sh


init: install-dependencies node_modules docker/config/traefik/certs
	@ echo -e "${ARROW} Generate root certificate..."
	mkcert -install

	@ echo -e "${ARROW} Generate certificates..."
	cd docker/config/traefik/certs && mkcert custodia-workspace.dev "*.custodia-workspace.dev"

	@ echo -e "${ARROW} Editing hosts file..."
	sudo sed -i '/custodia/d' /etc/hosts
	sudo sed -i '$$ a 127.0.0.1	custodia-workspace.dev custodia.custodia-workspace.dev api-custodia.custodia-workspace.dev' /etc/hosts

	@ echo -e "${ARROW} Initialize database..."
	docker compose up -d postgres --remove-orphans
	docker compose exec postgres psql -U postgres -c "DROP DATABASE IF EXISTS hellotrack"
	docker compose exec postgres psql -U postgres -c "CREATE DATABASE hellotrack"
	docker compose run --rm custodia-api pnpm exec nx run custodia-api:migrate

	@ echo -e "${ARROW} Starting services..."
	docker compose up -d

	@ echo -e "[${GREEN}OK${RESET}] Initialized"

run: node_modules
	@ echo -e "${ARROW} Starting services..."
	docker compose up -d
	@ echo -e 'webui : https://custodia.custodia-workspace.dev'
	@ echo -e 'api : https://api-custodia.custodia-workspace.dev/docs'
	@ echo -e "[${GREEN}OK${RESET}] Started"

db:
	@ echo -e "${ARROW} Open database..."
	@ echo -e "Show tables: ${YELLOW}\dt${RESET}"
	@ echo -e 'Show table Users: ${YELLOW}TABLE "Garages";${RESET}'
	@ echo -e 'Clear table Users: ${YELLOW}TRUNCATE "Garages" CASCADE;${RESET}'
	@ echo -e "Exit: ${YELLOW}\q${RESET}"
	docker exec -it hellotrack-postgres-1 psql -U postgres -d custodia
	@ echo -e "${RED}Cancel${RESET}"

data:
	docker exec -i hellotrack-postgres-1 psql -U postgres -d custodia < seeder.sql

clear:
	@ echo -e "${ARROW} Cleaning databases..."
	docker compose exec postgres psql -U postgres -d custodia -c "TRUNCATE TABLE \"Garages\" CASCADE;"
	docker compose exec postgres psql -U postgres -d custodia -c "TRUNCATE TABLE \"VehicleStates\" CASCADE;"
	docker compose exec postgres psql -U postgres -d custodia -c "TRUNCATE TABLE \"VehicleAppearances\" CASCADE;"
	docker compose exec postgres psql -U postgres -d custodia -c "TRUNCATE TABLE \"Services\" CASCADE;"
	docker compose exec postgres psql -U postgres -d custodia -c "TRUNCATE TABLE \"FuelTypes\" CASCADE;"
	docker compose exec postgres psql -U postgres -d custodia -c "TRUNCATE TABLE \"VehicleBrands\" CASCADE;"
	docker compose exec postgres psql -U postgres -d custodia -c "TRUNCATE TABLE \"VehicleCategories\" CASCADE;"
	docker compose exec postgres psql -U postgres -d custodia -c "TRUNCATE TABLE \"VehicleModels\" CASCADE;"
	docker compose exec postgres psql -U postgres -d custodia -c "TRUNCATE TABLE \"InterventionCategories\" CASCADE;"
	docker compose exec postgres psql -U postgres -d custodia -c "TRUNCATE TABLE \"Vehicles\" CASCADE;"
	@ echo -e "[${GREEN}OK${RESET}] Databases cleared"

stop:
	docker compose down
	@ echo -e "[${GREEN}OK${RESET}] Stopped"

migrate:
	@ echo -e "${ARROW} Migrating..."
	docker compose run --rm custodia-api pnpm exec nx run custodia-api:migrate
	@ echo -e "[${GREEN}OK${RESET}] Done"

wipe:
	@ echo -e "${ARROW} Migrating..."
	docker compose run --rm custodia-api pnpm exec nx run custodia-api:wipe
	@ echo -e "[${GREEN}OK${RESET}] Done"

.PHONY: init run db vpn data stop migrate