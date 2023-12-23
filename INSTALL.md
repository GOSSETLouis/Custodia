# Installation

## Linux

Initialize environment
```bash
make init
```
> To launch the application you must follow the instructions [here](README.md)

## Windows

### Dependencies
1. Install dependencies
   > The dependencies are listed [here](README.md)

2. Generate root certificate
    ```bash
    mkcert -install
    ```

3. Create folder `docker/config/traefik/certs`, access it and execute this command :
    ```bash
    mkcert custodia-workspace.dev "*.custodia-workspace.dev"
    ```

4. Add the following line in `/etc/hosts`
    ```bash
    127.0.0.1	custodia-workspace.dev custodia.custodia-workspace.dev api-custodia.custodia-workspace.dev
    ```

5. Install NodeJS dependencies
    ```bash
    pnpm install
    ```

6. Initialize the database
    ```bash
    docker compose up -d postgres
    docker compose exec postgres psql -U postgres -c "create database custodia"
    docker compose run --rm custodia-api pnpm exec nx run custodia-api:migrate
    ```

    > To launch the application you must follow the instructions [here](README.md)
 
