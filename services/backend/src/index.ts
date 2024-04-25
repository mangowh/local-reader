import "dotenv/config";

import { drizzle } from "drizzle-orm/mysql2";
import express from "express";
import cors from "cors";
import * as mysql from "mysql2/promise";
import { dbConfig, isDev } from "./config";
import { User, books, libraries, readings, users } from "./db/schema";
import { eq } from "drizzle-orm/sql";

const port = 3000;

const app = express();
app.use(express.json());

const main = async () => {
  const connection = await mysql.createConnection(dbConfig);

  const db = drizzle(connection, { logger: isDev });

  if (isDev) {
    app.use(cors());
  }

  app.get("/api/v1/users", async (req, res) => {
    const result: User[] = await db.select().from(users);

    res.json(result);
  });

  app.get("/api/v1/get-user-library", async (req, res) => {
    const userId = req.query.userId as string | undefined;

    if (!userId) {
      return res.sendStatus(400);
    }

    const result = await db
      .select()
      .from(libraries)
      .innerJoin(users, eq(libraries.userId, users.id))
      .innerJoin(books, eq(libraries.bookId, books.id))
      .where(eq(users.id, parseInt(userId)));

    res.json(result);
  });

  app.get("/", (req, res) => {
    res.send("Ciao Hastega!");
  });

  app.listen(port, () => {
    console.log(`In ascolto su porta ${port}`);

    if (!isDev) {
      console.log("Avviato in modalità produzione");
    } else {
      console.log("Avviato in modalità sviluppo");
    }
  });
};

main();
