import dotenv from "dotenv";
import { Pool } from "pg";
import { environment } from "../environment";

dotenv.config();

let db: Pool;

if (environment.ENV === "test") {
  db = new Pool({
    host: environment.POSTGRES_HOST,
    database: environment.POSTGRES_DB_TEST,
    user: environment.POSTGRES_USER,
    password: environment.POSTGRES_PASSWORD,
    port: Number(environment.POSTGRES_PORT) || 4000,
    ssl: true,
  });
} else if (environment.ENV === "dev") {
  db = new Pool({
    host: environment.POSTGRES_HOST,
    database: environment.POSTGRES_DB,
    user: environment.POSTGRES_USER,
    password: environment.POSTGRES_PASSWORD,
    port: Number(environment.POSTGRES_PORT) || 4000,
    ssl: true,
  });
} else if (environment.ENV === "prod") {
  db = new Pool({
    connectionString:
      "udacity-storefront.ckudhnwojkuf.us-east-1.rds.amazonaws.com",
    host: environment.POSTGRES_HOST,
    database: environment.POSTGRES_DB,
    user: environment.POSTGRES_USER,
    password: environment.POSTGRES_PASSWORD,
    port: Number(environment.POSTGRES_PORT) || 4000,
    ssl: true,
  });
}

export { db };
