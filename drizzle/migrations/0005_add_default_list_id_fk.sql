PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_library_settings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
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
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`default_list_id`) REFERENCES `lists`(`id`) ON UPDATE no action ON DELETE set null
);--> statement-breakpoint
INSERT INTO `__new_library_settings`("id", "user_id", "total_unit", "item_unit", "show_sidebar", "currency_symbol", "default_list_id", "opt_images", "opt_price", "opt_worn", "opt_consumable", "opt_list_description") SELECT "id", "user_id", "total_unit", "item_unit", "show_sidebar", "currency_symbol", "default_list_id", "opt_images", "opt_price", "opt_worn", "opt_consumable", "opt_list_description" FROM `library_settings`;--> statement-breakpoint
DROP TABLE `library_settings`;--> statement-breakpoint
ALTER TABLE `__new_library_settings` RENAME TO `library_settings`;--> statement-breakpoint
CREATE UNIQUE INDEX `library_settings_user_id_unique` ON `library_settings` (`user_id`);--> statement-breakpoint
PRAGMA foreign_keys=ON;
