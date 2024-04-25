import type { ConnectionOptions } from "mysql2/promise";

export const dbConfig = {
  host: process.env.DB_HOST,
  port: 3306,

  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,

  database: process.env.DB_NAME,
} satisfies ConnectionOptions;

export const isDev = process.env.NODE_ENV === "development";
