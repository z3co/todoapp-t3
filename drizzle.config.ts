import type { Config } from "drizzle-kit";

import { env } from "~/env";

export default {
	schema: "./src/server/db/schema.ts",
	dialect: "singlestore",
	tablesFilter: ["todoapp-t3_*"],
} satisfies Config;
