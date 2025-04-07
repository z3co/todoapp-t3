import { deleteTodo } from "~/lib/actions";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

export function DeleteTodo({ id }: { id: number }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);
  return (
    <form action={deleteTodoWithId}>
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-red-600"
      >
        <Trash2 className="h-4 w-4" />
        <span className="sr-only">Delete</span>
      </Button>
    </form>
  );
}
