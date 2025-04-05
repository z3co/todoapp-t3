import { db } from ".";
import { todo_table as todoSchema } from "./schema";

export function getTodos() {
  return db.select().from(todoSchema);
}
