import "server-only";

import { db } from ".";
import { todo_table as todoSchema } from "./schema";
import { eq, desc } from "drizzle-orm";

export const QUERIES = {
  getTodos: (userId: string) => {
    return db.select().from(todoSchema).where(eq(todoSchema.ownerId, userId)).orderBy(desc(todoSchema.title))
  },
};
