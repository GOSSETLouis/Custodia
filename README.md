
# 🚗 custodia

### Dependencies

#### Global
- [nx 15](https://nx.dev/)
- [pnpm 7](https://pnpm.js.org/)
- [Node 18](https://nodejs.org/)
- [TypeScript 4](https://www.typescriptlang.org/)
- [Postgres 15](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

#### Back-end
- [Nest 9](https://nestjs.com/)
- [Mikro-ORM 5](https://mikro-orm.io/)


### Links
- You must follow the [Installation Guide](INSTALL.md)
- You must have the [API](https://api-custodia.custodia-workspace.dev) and the [WebUI](https://custodia.custodia-workspace.dev)
- You have documentation of API routes on [/docs](https://api-custodia.custodia-workspace.dev/docs)



## Linux & MacOS

Start services
```bash
make run
```

Open database
```bash
make db
```

Stop services
```bash
make stop
```



## Windows

Start services
```bash
docker compose up -d
```

Open database
```bash
docker exec -it custodia-postgres-1 psql -U postgres -d custodia
```

Stop services
```bash
docker compose down
```
