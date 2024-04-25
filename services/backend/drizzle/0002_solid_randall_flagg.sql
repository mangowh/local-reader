CREATE TABLE `libraries` (
	`user_id` bigint unsigned NOT NULL,
	`book_id` bigint unsigned NOT NULL,
	`creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `libraries_user_id_book_id_pk` PRIMARY KEY(`user_id`,`book_id`)
);
--> statement-breakpoint
ALTER TABLE `libraries` ADD CONSTRAINT `libraries_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `libraries` ADD CONSTRAINT `libraries_book_id_books_id_fk` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE no action ON UPDATE no action;