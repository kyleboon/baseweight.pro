import { sqliteTable, integer, text, real, index } from 'drizzle-orm/sqlite-core';

// ---------------------------------------------------------------------------
// Better Auth tables
// ---------------------------------------------------------------------------

export const user = sqliteTable('user', {
    id: text('id').primaryKey(),
    name: text('name'),
    email: text('email').unique().notNull(),
    emailVerified: integer('emailVerified', { mode: 'boolean' }).notNull().default(false),
    image: text('image'),
    createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
    updatedAt: integer('updatedAt', { mode: 'timestamp' }).notNull(),
});

export const session = sqliteTable('session', {
    id: text('id').primaryKey(),
    expiresAt: integer('expiresAt', { mode: 'timestamp' }).notNull(),
    token: text('token').unique().notNull(),
    createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
    updatedAt: integer('updatedAt', { mode: 'timestamp' }).notNull(),
    ipAddress: text('ipAddress'),
    userAgent: text('userAgent'),
    userId: text('userId')
        .notNull()
        .references(() => user.id, { onDelete: 'cascade' }),
});

export const account = sqliteTable('account', {
    id: text('id').primaryKey(),
    accountId: text('accountId').notNull(),
    providerId: text('providerId').notNull(),
    userId: text('userId')
        .notNull()
        .references(() => user.id, { onDelete: 'cascade' }),
    accessToken: text('accessToken'),
    refreshToken: text('refreshToken'),
    idToken: text('idToken'),
    accessTokenExpiresAt: integer('accessTokenExpiresAt', { mode: 'timestamp' }),
    refreshTokenExpiresAt: integer('refreshTokenExpiresAt', { mode: 'timestamp' }),
    scope: text('scope'),
    password: text('password'),
    createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
    updatedAt: integer('updatedAt', { mode: 'timestamp' }).notNull(),
});

export const verification = sqliteTable('verification', {
    id: text('id').primaryKey(),
    identifier: text('identifier').notNull(),
    value: text('value').notNull(),
    expiresAt: integer('expiresAt', { mode: 'timestamp' }).notNull(),
    createdAt: integer('createdAt', { mode: 'timestamp' }),
    updatedAt: integer('updatedAt', { mode: 'timestamp' }),
});

// ---------------------------------------------------------------------------
// Application tables (user_id FK is now text to reference user.id)
// ---------------------------------------------------------------------------

export const library_settings = sqliteTable('library_settings', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    user_id: text('user_id')
        .unique()
        .notNull()
        .references(() => user.id, { onDelete: 'cascade' }),
    total_unit: text('total_unit').default('oz'),
    item_unit: text('item_unit').default('oz'),
    show_sidebar: integer('show_sidebar').default(0),
    currency_symbol: text('currency_symbol').default('$'),
    default_list_id: integer('default_list_id').references(() => lists.id, { onDelete: 'set null' }),
    opt_images: integer('opt_images').default(0),
    opt_price: integer('opt_price').default(0),
    opt_worn: integer('opt_worn').default(1),
    opt_consumable: integer('opt_consumable').default(1),
    opt_list_description: integer('opt_list_description').default(0),
});

export const lists = sqliteTable(
    'lists',
    {
        id: integer('id').primaryKey({ autoIncrement: true }),
        user_id: text('user_id')
            .notNull()
            .references(() => user.id, { onDelete: 'cascade' }),
        name: text('name').default(''),
        description: text('description').default(''),
        external_id: text('external_id').unique().notNull(),
        sort_order: integer('sort_order').default(0),
        created_at: integer('created_at'),
    },
    (table) => [index('lists_user_id_sort_order_idx').on(table.user_id, table.sort_order)],
);

export const categories = sqliteTable(
    'categories',
    {
        id: integer('id').primaryKey({ autoIncrement: true }),
        user_id: text('user_id')
            .notNull()
            .references(() => user.id, { onDelete: 'cascade' }),
        list_id: integer('list_id')
            .notNull()
            .references(() => lists.id, { onDelete: 'cascade' }),
        name: text('name').default(''),
        sort_order: integer('sort_order').default(0),
    },
    (table) => [index('categories_list_id_sort_order_idx').on(table.list_id, table.sort_order)],
);

export const images = sqliteTable(
    'images',
    {
        id: integer('id').primaryKey({ autoIncrement: true }),
        user_id: text('user_id')
            .notNull()
            .references(() => user.id, { onDelete: 'cascade' }),
        entity_type: text('entity_type').notNull(), // 'item' | 'category' | 'list'
        entity_id: integer('entity_id').notNull(),
        filename: text('filename').notNull(), // relative path under uploadsPath, or full URL for remote
        is_local: integer('is_local', { mode: 'boolean' }).notNull().default(true),
        sort_order: integer('sort_order').default(0),
        created_at: integer('created_at'),
    },
    (table) => [index('images_user_id_entity_idx').on(table.user_id, table.entity_type, table.entity_id)],
);

export const category_items = sqliteTable(
    'category_items',
    {
        id: integer('id').primaryKey({ autoIncrement: true }),
        category_id: integer('category_id')
            .notNull()
            .references(() => categories.id, { onDelete: 'cascade' }),
        user_id: text('user_id')
            .notNull()
            .references(() => user.id, { onDelete: 'cascade' }),
        global_item_id: integer('global_item_id'),
        name: text('name').default(''),
        description: text('description').default(''),
        weight: real('weight').default(0),
        author_unit: text('author_unit').default('oz'),
        price: real('price').default(0),
        url: text('url').default(''),
        qty: integer('qty').default(1),
        worn: integer('worn').default(0),
        consumable: integer('consumable').default(0),
        star: integer('star').default(0),
        sort_order: integer('sort_order').default(0),
    },
    (table) => [index('category_items_category_id_sort_order_idx').on(table.category_id, table.sort_order)],
);
