import { connect } from '../db.js';

// Initialise the MongoDB connection once when the Nitro server starts.
export default defineNitroPlugin(async () => {
    await connect();
});
