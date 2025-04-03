import TodoDashboard from "~/components/todo-dashboard";
import { db } from "~/server/db";
import { todo_table } from "~/server/db/schema";

export default async function DashboardPage() {
  const todos = await db.select().from(todo_table);
  return (
    <main className="min-h-screen bg-gray-50">
      <TodoDashboard initialTodos={todos} />
    </main>
  );
}
