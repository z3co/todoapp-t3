import "server-only";

import { db } from ".";
import { todo_table as todoSchema } from "./schema";
import { eq, desc, and } from "drizzle-orm";

export const QUERIES = {
  getTodos: (userId: string) => {
    return db
      .select()
      .from(todoSchema)
      .where(eq(todoSchema.ownerId, userId))
      .orderBy(desc(todoSchema.title));
  },
};

export const MUTATIONS = {
  insertTodo: (todo: typeof todoSchema.$inferInsert) => {
    return db.insert(todoSchema).values(todo);
  },
  deleteTodo: async (id: number, userId: string) => {
    await db
      .delete(todoSchema)
      .where(and(eq(todoSchema.id, id), eq(todoSchema.ownerId, userId)))
      .limit(1);
  },
};
