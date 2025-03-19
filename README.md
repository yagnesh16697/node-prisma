# node-prisma
# Node.js + PostgreSQL + Prisma + Docker + OpenAPI

## Setup
1. Clone this repository.
2. Run `docker-compose up -d` to start PostgreSQL.
3. Run `npx prisma migrate dev --name init` to apply migrations.
4. Run `npm install` to install dependencies.
5. Start the server with `npm run dev`.
6. Access API documentation at `http://localhost:3000/api-docs`.
