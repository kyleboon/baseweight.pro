CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`list_id` integer NOT NULL,
	`name` text DEFAULT '',
	`sort_order` integer DEFAULT 0,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`list_id`) REFERENCES `lists`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `category_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`category_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`global_item_id` integer,
	`name` text DEFAULT '',
	`description` text DEFAULT '',
	`weight` real DEFAULT 0,
	`author_unit` text DEFAULT 'oz',
	`price` real DEFAULT 0,
	`image` text DEFAULT '',
	`image_url` text DEFAULT '',
	`url` text DEFAULT '',
	`qty` integer DEFAULT 1,
	`worn` integer DEFAULT 0,
	`consumable` integer DEFAULT 0,
	`star` integer DEFAULT 0,
	`sort_order` integer DEFAULT 0,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `library_settings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`total_unit` text DEFAULT 'oz',
	`item_unit` text DEFAULT 'oz',
	`show_sidebar` integer DEFAULT 0,
	`currency_symbol` text DEFAULT '$',
	`default_list_id` integer,
	`opt_images` integer DEFAULT 0,
	`opt_price` integer DEFAULT 0,
	`opt_worn` integer DEFAULT 1,
	`opt_consumable` integer DEFAULT 1,
	`opt_list_description` integer DEFAULT 0,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `library_settings_user_id_unique` ON `library_settings` (`user_id`);--> statement-breakpoint
CREATE TABLE `lists` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`name` text DEFAULT '',
	`description` text DEFAULT '',
	`external_id` text NOT NULL,
	`sort_order` integer DEFAULT 0,
	`created_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `lists_external_id_unique` ON `lists` (`external_id`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`token` text,
	`created_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_token_unique` ON `users` (`token`);