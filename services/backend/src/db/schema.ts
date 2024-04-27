import { relations } from "drizzle-orm";
import {
  bigint,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  firstName: text("first_name"),
  lastName: text("last_name"),
  email: varchar("email", { length: 255 }),
});

export const usersRelations = relations(users, ({ many }) => ({
  usersToBooks: many(usersToBooks),
  readings: many(readings),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const readings = pgTable(
  "readings",
  {
    id: serial("id"),

    userId: bigint("user_id", { mode: "number" }).references(() => users.id),
    bookId: bigint("book_id", { mode: "number" }).references(() => books.id),

    creationDate: timestamp("creation_date").defaultNow(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.id, table.userId, table.bookId] }),
    };
  }
);

export const readingsRelations = relations(readings, ({ one }) => ({
  book: one(books, {
    fields: [readings.bookId],
    references: [books.id],
  }),
  user: one(users, {
    fields: [readings.userId],
    references: [users.id],
  }),
}));

export type Reading = typeof readings.$inferSelect;
export type newReading = typeof readings.$inferInsert;

export const usersToBooks = pgTable(
  "usersToBooks",
  {
    userId: bigint("user_id", { mode: "number" }).references(() => users.id),
    bookId: bigint("book_id", { mode: "number" }).references(() => books.id),

    creationDate: timestamp("creation_date").defaultNow(),
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

export const books = pgTable("books", {
  id: serial("id").primaryKey(),

  title: varchar("title", { length: 255 }).notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  isbn: varchar("isbn", { length: 20 }).notNull(),

  plot: text("plot"),

  creationDate: timestamp("creation_date").defaultNow(),
  deletionDate: timestamp("deletion_date"),
});

export const booksRelations = relations(books, ({ many }) => ({
  usersToBooks: many(usersToBooks),
  readings: many(readings),
}));

export type Book = typeof books.$inferSelect;
export type NewBook = typeof books.$inferInsert;
