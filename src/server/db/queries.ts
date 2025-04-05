import "server-only";

import { db } from ".";
import { todo_table as todoSchema } from "./schema";

export const QUERIES = {
  getTodos: () => {
    return db.select().from(todoSchema);
  },
};
