import TodoDashboard from "~/components/todo-dashboard";
import { QUERIES } from "~/server/db/queries";

export default async function DashboardPage() {
  const todos = await QUERIES.getTodos();
  return (
    <main className="min-h-screen bg-gray-50">
      <TodoDashboard initialTodos={todos} />
    </main>
  );
}
