import {
	bigint,
	int,
	singlestoreTable,
	text,
} from "drizzle-orm/singlestore-core";

export const users = singlestoreTable("users_table", {
	id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
	name: text("name"),
	age: int("age"),
});
