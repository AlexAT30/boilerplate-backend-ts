import { DataSource } from "typeorm";
// Entities

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "name",
  synchronize: true,
  logging: false,
  entities: [],
})