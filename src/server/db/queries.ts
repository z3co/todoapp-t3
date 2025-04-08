import "server-only";

import { db } from ".";
import { todo_table as todoSchema } from "./schema";
import { eq, and, asc } from "drizzle-orm";

export const QUERIES = {
  getTodos: async (userId: string) => {
    return await db
      .select()
      .from(todoSchema)
      .where(eq(todoSchema.ownerId, userId))
      .orderBy(asc(todoSchema.createdAt));
  },
  getTodoById: async (id: number, userId: string) => {
    return await db
      .select()
      .from(todoSchema)
      .where(and(eq(todoSchema.id, id), eq(todoSchema.ownerId, userId)))
      .limit(1);
  },
};

export const MUTATIONS = {
  insertTodo: async (todo: typeof todoSchema.$inferInsert) => {
    return db.insert(todoSchema).values(todo).$returningId();
  },
  deleteTodo: async (id: number, userId: string) => {
    await db
      .delete(todoSchema)
      .where(and(eq(todoSchema.id, id), eq(todoSchema.ownerId, userId)))
      .limit(1);
  },
  updateTodo: async (
    id: number,
    newData: { title: string } | { completed: boolean },
    userId: string,
  ) => {
    await db
      .update(todoSchema)
      .set(newData)
      .where(and(eq(todoSchema.id, id), eq(todoSchema.ownerId, userId)))
      .limit(1);
  },
};
