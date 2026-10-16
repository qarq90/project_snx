import { Pool } from "@neondatabase/serverless";

const connectionString = process.env.NEXT_PUBLIC_NEON_CONNECTION_STRING;
if (!connectionString) {
    throw new Error(
        "NEXT_PUBLIC_NEON_CONNECTION_STRING environment variable is not set",
    );
}

const pool = new Pool({
    connectionString: connectionString,
    ssl: true,
});

export default pool;
