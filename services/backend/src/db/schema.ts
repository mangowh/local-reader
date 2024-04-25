import {
  bigint,
  mysqlTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm/sql";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),

  firstName: text("first_name"),
  lastName: text("last_name"),
  email: varchar("email", { length: 255 }),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const readings = mysqlTable(
  "readings",
  {
    id: serial("id"),

    userId: bigint("user_id", { mode: "number", unsigned: true }).references(
      () => users.id
    ),
    bookId: bigint("book_id", { mode: "number", unsigned: true }).references(
      () => books.id
    ),

    creationDate: timestamp("creation_date")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.id, table.userId, table.bookId] }),
    };
  }
);

export const libraries = mysqlTable(
  "libraries",
  {
    userId: bigint("user_id", { mode: "number", unsigned: true }).references(
      () => users.id
    ),
    bookId: bigint("book_id", { mode: "number", unsigned: true }).references(
      () => books.id
    ),

    creationDate: timestamp("creation_date")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.bookId] }),
    };
  }
);

export const books = mysqlTable("books", {
  id: serial("id").primaryKey(),

  author: varchar("author", { length: 255 }).notNull(),
  isbn: varchar("isbn", { length: 20 }).notNull(),

  plot: text("plot"),

  creationDate: timestamp("creation_date")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  deletionDate: timestamp("deletion_date"),
});

export type Book = typeof books.$inferSelect;
export type NewBook = typeof books.$inferInsert;
