import "dotenv/config";

import { faker } from "@faker-js/faker";
import { count } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { dbConfig, isDev } from "../src/config";
import { books, readings, users, usersToBooks } from "../src/db/schema";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const main = async () => {
  const client = new Pool(dbConfig);
  const db = drizzle(client, { logger: isDev });

  console.log("\nSeeding del database...\n");

  // UTENTI

  const [usersCount] = await db.select({ count: count() }).from(users);

  let resultingUsers = [];

  if (usersCount.count === 0) {
    const usersData: (typeof users.$inferInsert)[] = [
      {
        firstName: "Hastega1",
        lastName: "Hastega1",
        email: faker.internet.email(),
      },
      {
        firstName: "Hastega2",
        lastName: "Hastega2",
        email: faker.internet.email(),
      },
      {
        firstName: "Hastega3",
        lastName: "Hastega3",
        email: faker.internet.email(),
      },
    ];

    resultingUsers = await db.insert(users).values(usersData).returning();
  }

  // LIBRI

  const [booksCount] = await db.select({ count: count() }).from(books);

  const booksData: (typeof books.$inferInsert)[] = [];

  if (booksCount.count === 0) {
    for (let i = 1; i < 20; i++) {
      booksData.push({
        title: faker.lorem.sentence({ min: 1, max: 10 }),
        author: faker.person.fullName(),
        isbn: faker.commerce.isbn(),
        plot: faker.lorem.paragraphs({ min: 1, max: 5 }),
      });
    }

    const resultedBooks = await db.insert(books).values(booksData).returning();

    // LIBRI <-> UTENTI

    const usersToBooksData: (typeof usersToBooks.$inferInsert)[] = [];

    for (const book of resultedBooks) {
      const randomUserId = getRandomInt(1, resultingUsers.length * 2);

      if (randomUserId <= resultingUsers.length) {
        usersToBooksData.push({
          bookId: book.id,
          userId: randomUserId,
        });
      }
    }

    await db.insert(usersToBooks).values(usersToBooksData);

    // LETTURE

    const readingsData: (typeof readings.$inferInsert)[] = [];

    for (const book of resultedBooks) {
      const count = getRandomInt(1, 5);

      for (let i = 0; i < count; i++) {
        const randomUserId = getRandomInt(1, resultingUsers.length);

        readingsData.push({
          userId: randomUserId,
          bookId: book.id,
          creationDate: faker.date.past({ years: 20 }),
        });
      }
    }

    await db.insert(readings).values(readingsData);
  }

  console.log("\nSeeding completato!\n");

  await client.end();
};

main();
