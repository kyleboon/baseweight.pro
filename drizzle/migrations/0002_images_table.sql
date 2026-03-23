CREATE TABLE `images` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`entity_type` text NOT NULL,
	`entity_id` integer NOT NULL,
	`filename` text NOT NULL,
	`is_local` integer DEFAULT true NOT NULL,
	`sort_order` integer DEFAULT 0,
	`created_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `images_entity_idx` ON `images` (`entity_type`, `entity_id`);
--> statement-breakpoint
INSERT INTO `images` (`user_id`, `entity_type`, `entity_id`, `filename`, `is_local`, `sort_order`, `created_at`)
SELECT `user_id`, 'item', `id`, `image_url`, 0, 0, strftime('%s', 'now')
FROM `category_items`
WHERE `image_url` IS NOT NULL AND `image_url` != '';
--> statement-breakpoint
INSERT INTO `images` (`user_id`, `entity_type`, `entity_id`, `filename`, `is_local`, `sort_order`, `created_at`)
SELECT `user_id`, 'item', `id`, 'https://i.imgur.com/' || `image` || '.jpg', 0, 0, strftime('%s', 'now')
FROM `category_items`
WHERE (`image` IS NOT NULL AND `image` != '')
  AND (`image_url` IS NULL OR `image_url` = '');
