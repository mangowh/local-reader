import "dotenv/config";

import { faker } from "@faker-js/faker";
import * as mysql from "mysql2/promise";
import { books, users } from "../src/db/schema";
import { dbConfig } from "../src/config";
import { drizzle } from "drizzle-orm/mysql2";

const main = async () => {
  const connection = await mysql.createConnection(dbConfig);
  const db = drizzle(connection, { logger: true });

  console.log("\nSeeding del database...\n");

  const usersData: (typeof users.$inferInsert)[] = [
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

  await db.insert(users).values(usersData);

  const booksData: (typeof books.$inferInsert)[] = [];

  for (let i = 0; i < 20; i++) {
    booksData.push({
      title: faker.lorem.sentence({ min: 1, max: 10 }),
      author: faker.person.fullName(),
      isbn: faker.commerce.isbn(),
      plot: faker.lorem.paragraph(),
    });
  }

  await db.insert(books).values(booksData);

  console.log("\nSeeding completato!\n");

  await connection.end();
};

main();
