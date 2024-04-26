import { relations } from "drizzle-orm";
import {
  bigint,
  mysqlTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm/sql";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),

  firstName: text("first_name"),
  lastName: text("last_name"),
  email: varchar("email", { length: 255 }),
});

export const usersRelations = relations(users, ({ many }) => ({
  usersToBooks: many(usersToBooks),
}));

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

export const usersToBooks = mysqlTable(
  "usersToBooks",
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

export const usersToBooksRelations = relations(usersToBooks, ({ one }) => ({
  book: one(books, {
    fields: [usersToBooks.bookId],
    references: [books.id],
  }),
  user: one(users, {
    fields: [usersToBooks.userId],
    references: [users.id],
  }),
}));


export type UsersToBooks = typeof usersToBooks.$inferSelect;
export type NewUsersToBooks = typeof usersToBooks.$inferInsert;

export const books = mysqlTable("books", {
  id: serial("id").primaryKey(),

  title: varchar("title", { length: 255 }).notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  isbn: varchar("isbn", { length: 20 }).notNull(),

  plot: text("plot"),

  creationDate: timestamp("creation_date")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  deletionDate: timestamp("deletion_date"),
});

export const booksRelations = relations(books, ({ many }) => ({
  usersToBooks: many(usersToBooks),
}));

export type Book = typeof books.$inferSelect;
export type NewBook = typeof books.$inferInsert;
