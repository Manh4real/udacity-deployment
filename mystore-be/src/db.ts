import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

let db: Pool;

if (process.env.ENV === "test") {
  db = new Pool({
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB_TEST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT) || 4000,
    ssl: true,
  });
} else if (process.env.ENV === "dev") {
  db = new Pool({
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT) || 4000,
    ssl: true,
  });
} else if (process.env.ENV === "prod") {
  db = new Pool({
    connectionString:
      "udacity-storefront.ckudhnwojkuf.us-east-1.rds.amazonaws.com",
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT) || 4000,
    ssl: true,
  });
}

export { db };
