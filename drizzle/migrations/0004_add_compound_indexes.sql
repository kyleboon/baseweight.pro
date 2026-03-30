CREATE INDEX `lists_user_id_sort_order_idx` ON `lists` (`user_id`, `sort_order`);
--> statement-breakpoint
CREATE INDEX `categories_list_id_sort_order_idx` ON `categories` (`list_id`, `sort_order`);
--> statement-breakpoint
CREATE INDEX `category_items_category_id_sort_order_idx` ON `category_items` (`category_id`, `sort_order`);
--> statement-breakpoint
CREATE INDEX `images_user_id_entity_idx` ON `images` (`user_id`, `entity_type`, `entity_id`);
