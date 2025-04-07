"use server";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { MUTATIONS, QUERIES } from "~/server/db/queries";
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

  const newTodoId = await MUTATIONS.insertTodo(newTodo);
  revalidatePath("/dashboard");
  if (newTodoId.length === 0) throw new Error("Failed to insert todo");
  if (!newTodoId[0]) throw new Error("Failed to insert todo");
  const DBTodo = QUERIES.getTodoById(newTodoId[0].id, session.userId);
  return DBTodo;
}

export async function deleteTodo(todoId: number) {
  const session = await auth();

  if (!session.userId) throw new Error("User not authorized");

  const { error } = await tryCatch(
    MUTATIONS.deleteTodo(todoId, session.userId),
  );

  if (error) throw new Error("Could not delete todo");
  revalidatePath("/dashboard");
}

export async function editTodo(
  todoId: number,
  newData: { title: string } | { completed: boolean },
) {
  const session = await auth();

  if (!session.userId) throw new Error("User not authorized");

  const { error } = await tryCatch(
    MUTATIONS.updateTodo(todoId, newData, session.userId),
  );

  if (error) {
    console.error("An error occurred while updating todo", error);
    throw new Error("Could not update todo");
  }
  revalidatePath("/dashboard");
}
