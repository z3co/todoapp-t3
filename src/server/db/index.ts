import { drizzle } from "drizzle-orm/singlestore";
import { type Pool, createPool } from "mysql2/promise";

import { env } from "~/env";

import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
	conn: Pool | undefined;
};

const conn =
	globalForDb.conn ??
	createPool({
		host: env.SINGLESTORE_HOST,
		port: Number.parseInt(env.SINGLESTORE_PORT),
		user: env.SINGLESTORE_USER,
		password: env.SINGLESTORE_PASS,
		database: env.SINGLESTORE_DB_NAME,
		ssl: {},
		maxIdle: 0,
	});

if (env.NODE_ENV !== "production") globalForDb.conn = conn;

conn.addListener("error", (err) => {
	console.error("Database connection error:", err);
});

export const db = drizzle(conn, { schema });
