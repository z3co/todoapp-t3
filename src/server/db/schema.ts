import {
	bigint,
	boolean,
	index,
	singlestoreEnum,
	singlestoreTableCreator,
	text,
	timestamp,
} from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator(
	(name) => `todoapp-t3_${name}`,
);

export const todo_table = createTable(
	"todo_table",
	{
		id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
		title: text("name").notNull(),
		completed: boolean("age").notNull(),
		priority: singlestoreEnum(["low", "medium", "high"]).notNull(),
		ownerId: text("owner_id").notNull(),
		createdAt: timestamp("created_at").notNull().defaultNow(),
	},
	(t) => {
		return [index("owner_id_index").on(t.ownerId)];
	},
);

export type DB_TodoType = typeof todo_table.$inferSelect;
