import "dotenv/config";

import { drizzle } from "drizzle-orm/mysql2";
import express from "express";
import * as mysql from "mysql2/promise";
import { dbConfig } from "./config";
import { User, users } from "./db/schema";

const port = 3000;

const app = express();
app.use(express.json());

const main = async () => {
  const connection = await mysql.createConnection(dbConfig);

  const db = drizzle(connection);

  app.get("/api/v1/users", async (req, res) => {
    const result: User[] = await db.select().from(users);

    res.json(result);
  });

  app.get("/", (req, res) => {
    res.send("Ciao Hastega!");
  });

  app.listen(port, () => {
    console.log(`In ascolto su porta ${port}`);
  });
};

main();
