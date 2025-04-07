import { Plus } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default async function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
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
              <div>0 tasks remaining</div>
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
            <span>Loading...</span>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
