import { sqliteTable, integer, text, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    username: text('username').unique().notNull(),
    email: text('email').unique().notNull(),
    password: text('password').notNull(),
    token: text('token').unique(),
    created_at: integer('created_at'),
});

export const library_settings = sqliteTable('library_settings', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    user_id: integer('user_id').unique().notNull().references(() => users.id, { onDelete: 'cascade' }),
    total_unit: text('total_unit').default('oz'),
    item_unit: text('item_unit').default('oz'),
    show_sidebar: integer('show_sidebar').default(0),
    currency_symbol: text('currency_symbol').default('$'),
    default_list_id: integer('default_list_id'),
    opt_images: integer('opt_images').default(0),
    opt_price: integer('opt_price').default(0),
    opt_worn: integer('opt_worn').default(1),
    opt_consumable: integer('opt_consumable').default(1),
    opt_list_description: integer('opt_list_description').default(0),
});

export const lists = sqliteTable('lists', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    user_id: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    name: text('name').default(''),
    description: text('description').default(''),
    external_id: text('external_id').unique().notNull(),
    sort_order: integer('sort_order').default(0),
    created_at: integer('created_at'),
});

export const categories = sqliteTable('categories', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    user_id: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    list_id: integer('list_id').notNull().references(() => lists.id, { onDelete: 'cascade' }),
    name: text('name').default(''),
    sort_order: integer('sort_order').default(0),
});

export const category_items = sqliteTable('category_items', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    category_id: integer('category_id').notNull().references(() => categories.id, { onDelete: 'cascade' }),
    user_id: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    // Phase 2: global_item_id will reference a global_items table
    global_item_id: integer('global_item_id'),
    name: text('name').default(''),
    description: text('description').default(''),
    weight: real('weight').default(0),
    author_unit: text('author_unit').default('oz'),
    price: real('price').default(0),
    image: text('image').default(''),
    image_url: text('image_url').default(''),
    url: text('url').default(''),
    qty: integer('qty').default(1),
    worn: integer('worn').default(0),
    consumable: integer('consumable').default(0),
    star: integer('star').default(0),
    sort_order: integer('sort_order').default(0),
});
