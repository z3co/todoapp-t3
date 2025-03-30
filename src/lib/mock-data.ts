export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

export const initialTodos: Todo[] = [
  {
    id: 1,
    title: "Complete project proposal",
    completed: false,
    priority: "high",
  },
  { id: 2, title: "Review pull requests", completed: true, priority: "medium" },
  {
    id: 3,
    title: "Prepare for team meeting",
    completed: false,
    priority: "high",
  },
  { id: 4, title: "Update documentation", completed: false, priority: "low" },
  { id: 5, title: "Fix bug in login flow", completed: true, priority: "high" },
  {
    id: 6,
    title: "Design new feature mockups",
    completed: false,
    priority: "medium",
  },
  {
    id: 7,
    title: "Respond to client emails",
    completed: true,
    priority: "medium",
  },
];
