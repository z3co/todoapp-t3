"use client";

import { Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import type { DB_TodoType } from "~/server/db/schema";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

// Define types using TypeScript interfaces

interface PriorityColors {
  low: string;
  medium: string;
  high: string;
}

// Priority badge colors
const priorityColors: PriorityColors = {
  low: "bg-blue-100 text-blue-800",
  medium: "bg-blue-200 text-blue-800",
  high: "bg-blue-300 text-blue-800",
};

export default function TodoDashboard(props: { initialTodos: DB_TodoType[] }) {
  const { initialTodos } = props;
  const [todos, setTodos] = useState<DB_TodoType[]>(initialTodos);

  // Mock function to toggle todo completion
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="m-2 flex justify-end">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-bold text-2xl">
            TodoApp Dashboard
          </CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> New Todo
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center justify-between text-gray-500 text-sm">
            <div>
              {todos.filter((todo) => !todo.completed).length} tasks remaining
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-200 text-blue-600"
              >
                All
              </Button>
              <Button variant="ghost" size="sm">
                Active
              </Button>
              <Button variant="ghost" size="sm">
                Completed
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center justify-between rounded-lg border p-3 ${todo.completed ? "bg-gray-50" : "bg-white"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                    className="border-blue-400 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                  />
                  <span
                    className={
                      todo.completed ? "text-gray-400 line-through" : ""
                    }
                  >
                    {todo.title}
                  </span>
                  <Badge className={priorityColors[todo.priority]}>
                    {todo.priority}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-blue-600"
                  >
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
