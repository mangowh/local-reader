import "dotenv/config";

import { faker } from "@faker-js/faker";
import * as mysql from "mysql2/promise";
import { books, users, usersToBooks } from "../src/db/schema";
import { dbConfig } from "../src/config";
import { drizzle } from "drizzle-orm/mysql2";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const main = async () => {
  const connection = await mysql.createConnection(dbConfig);
  const db = drizzle(connection, { logger: true });

  console.log("\nSeeding del database...\n");

  const usersData: (typeof users.$inferInsert)[] = [
    {
      id: 1,
      firstName: "Hastega1",
      lastName: "Hastega1",
      email: faker.internet.email(),
    },
    {
      id: 2,
      firstName: "Hastega2",
      lastName: "Hastega2",
      email: faker.internet.email(),
    },
    {
      id: 3,
      firstName: "Hastega3",
      lastName: "Hastega3",
      email: faker.internet.email(),
    },
  ];

  await db.insert(users).values(usersData);

  const booksData: (typeof books.$inferInsert)[] = [];

  for (let i = 1; i < 20; i++) {
    booksData.push({
      id: i,
      title: faker.lorem.sentence({ min: 1, max: 10 }),
      author: faker.person.fullName(),
      isbn: faker.commerce.isbn(),
      plot: faker.lorem.paragraph(),
    });
  }

  await db.insert(books).values(booksData);

  const usersToBooksData: (typeof usersToBooks.$inferInsert)[] = [];

  for (const book of booksData) {
    if (book.id) {
      usersToBooksData.push({
        bookId: book.id,
        userId: getRandomInt(1, 3),
      });
    }
  }

  await db.insert(usersToBooks).values(usersToBooksData);

  console.log("\nSeeding completato!\n");

  await connection.end();
};

main();
