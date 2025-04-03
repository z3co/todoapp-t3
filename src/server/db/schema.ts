import "server-only";

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
  (name) => `todoapp_t3_${name}`,
);

export const todo_table = createTable(
  "todo_table",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    title: text("title").notNull(),
    completed: boolean("completed").notNull(),
    priority: singlestoreEnum("priority", ["low", "medium", "high"]).notNull(),
    ownerId: text("owner_id").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (t) => {
    return [index("owner_id_index").on(t.ownerId)];
  },
);

export type DB_TodoType = typeof todo_table.$inferSelect;
