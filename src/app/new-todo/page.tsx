"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

export default function TodoApp() {
  const [title, setTitle] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      // Here you could add logic to save the todo to a database
      console.log("New todo:", title)
      setTitle("")
    }
  }

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border border-blue-200">
        <CardHeader className="bg-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">Todo App</CardTitle>
        </CardHeader>
        <CardContent className="bg-white rounded-b-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                New Todo
              </label>
              <Input
                id="title"
                placeholder="Enter todo title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
              <span className="text-xl font-bold mr-1">+</span> Add Todo
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

