import TodoDashboard from "~/components/todo-dashboard";
import { getTodos } from "~/server/db/queries";

export default async function DashboardPage() {
  const todos = await getTodos();
  return (
    <main className="min-h-screen bg-gray-50">
      <TodoDashboard initialTodos={todos} />
    </main>
  );
}
