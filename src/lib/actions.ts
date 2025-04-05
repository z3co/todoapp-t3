"use server";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import { todo_table } from "~/server/db/schema";

export async function addTodo(todoTitle: string) {
  const session = await auth();

  if (!session.userId) return;

  if (todoTitle === "") return;
  const newTodo: typeof todo_table.$inferInsert = {
    title: todoTitle,
    completed: false,
    priority: "medium",
    ownerId: session.userId,
  };

  await db.insert(todo_table).values(newTodo);
  revalidatePath("/dashboard")
}
