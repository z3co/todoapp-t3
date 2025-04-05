"use server";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { MUTATIONS } from "~/server/db/queries";
import type { todo_table } from "~/server/db/schema";

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

  await MUTATIONS.insertTodo(newTodo);
  revalidatePath("/dashboard");
}
