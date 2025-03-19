# Node.js + PostgreSQL + Prisma + Docker + OpenAPI

## Setup
1. Clone this repository.
2. Run `docker-compose up -d` to start PostgreSQL.
3. Run `npx prisma migrate dev --name init` to apply migrations.
4. Run `npm install` to install dependencies.
5. Start the server with `npm run dev`.
6. Access API documentation at `http://localhost:3000/api-docs`.

## API Endpoints
- **POST /data** → Store data in PostgreSQL.
- **GET /data** → Retrieve data from PostgreSQL.

## Screenshots
### API Testing
![API Request Screenshot](https://github.com/yagnesh16697/node-prisma/blob/master/Screenshot%20from%202025-03-19%2022-22-18.png)

![Prisma Studio Screenshot](https://github.com/yagnesh16697/node-prisma/blob/master/Screenshot%20from%202025-03-19%2022-23-00.png)

### Swagger API Docs
![Swagger UI Screenshot](https://github.com/yagnesh16697/node-prisma/blob/master/Screenshot%20from%202025-03-19%2022-23-35.png)
