import "dotenv/config";

import { faker } from "@faker-js/faker";
import * as mysql from "mysql2/promise";
import { users } from "../src/db/schema";
import { dbConfig } from "../src/config";
import { drizzle } from "drizzle-orm/mysql2";

const main = async () => {
  const connection = await mysql.createConnection(dbConfig);
  const db = drizzle(connection, { logger: true });

  const data: (typeof users.$inferInsert)[] = [
    {
      firstName: "Hastega1",
      lastName: "Hastega1",
    },
    {
      firstName: "Hastega2",
      lastName: "Hastega2",
    },
    {
      firstName: "Hastega3",
      lastName: "Hastega3",
    },
  ];

  console.log("Seed start");

  await db.insert(users).values(data);

  console.log("Seed done");

  await connection.end();
};

main();
