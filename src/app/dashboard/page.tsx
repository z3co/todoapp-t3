import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import TodoDashboard from "~/components/todo-dashboard";
import { QUERIES } from "~/server/db/queries";

export default async function DashboardPage() {
  const user = await auth();
  if (!user.userId) return redirect("/");
  try {
    const todos = await QUERIES.getTodos(user.userId);
    console.log("Todos: ", todos);
  } catch(error) {
    console.log("Error getting todos: ", error);
  }
  return (
    <main className="min-h-screen bg-gray-50">
      <TodoDashboard initialTodos={todos} />
    </main>
  );
}
