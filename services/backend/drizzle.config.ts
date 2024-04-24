import "dotenv/config";
import type { Config } from "drizzle-kit";

if(!process.env.DB_HOST || !process.env.DB_NAME) {
  throw new Error("Errore connessione db");
}

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
} satisfies Config;
