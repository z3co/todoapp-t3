"use server";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { MUTATIONS } from "~/server/db/queries";
import type { todo_table } from "~/server/db/schema";
import { tryCatch } from "./utils";

export async function addTodo(todoTitle: string) {
  const session = await auth();

  if (!session.userId) throw new Error("User not authorized");

  if (todoTitle === "") throw new Error("Empty title??");
  const newTodo: typeof todo_table.$inferInsert = {
    title: todoTitle,
    completed: false,
    priority: "medium",
    ownerId: session.userId,
  };

  await MUTATIONS.insertTodo(newTodo);
  revalidatePath("/dashboard");
}

export async function deleteTodo(todoId: number) {
  const session = await auth();

  if (!session.userId) throw new Error("User not authorized");

  const { error } = await tryCatch(
    MUTATIONS.deleteTodo(todoId, session.userId),
  );

  if (error) throw new Error("Could not delete todo")
  revalidatePath("/dashboard")
}
