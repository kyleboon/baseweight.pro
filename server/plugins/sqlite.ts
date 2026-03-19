import config from 'config';
import { initDb } from '../db.js';

// Initialise the SQLite connection once when the Nitro server starts.
export default defineNitroPlugin(() => {
    const dbPath = process.env.DATABASE_PATH ?? config.get<string>('databasePath') ?? './data/lighterpack.db';
    initDb(dbPath);
});
