CREATE TABLE IF NOT EXISTS "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"author" varchar(255) NOT NULL,
	"isbn" varchar(20) NOT NULL,
	"plot" text,
	"creation_date" timestamp DEFAULT now() NOT NULL,
	"deletion_date" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "readings" (
	"id" serial NOT NULL,
	"user_id" bigint,
	"book_id" bigint,
	"creation_date" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "readings_id_user_id_book_id_pk" PRIMARY KEY("id","user_id","book_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text,
	"last_name" text,
	"email" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "usersToBooks" (
	"user_id" bigint,
	"book_id" bigint,
	"creation_date" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "usersToBooks_user_id_book_id_pk" PRIMARY KEY("user_id","book_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "readings" ADD CONSTRAINT "readings_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "readings" ADD CONSTRAINT "readings_book_id_books_id_fk" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "usersToBooks" ADD CONSTRAINT "usersToBooks_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "usersToBooks" ADD CONSTRAINT "usersToBooks_book_id_books_id_fk" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
