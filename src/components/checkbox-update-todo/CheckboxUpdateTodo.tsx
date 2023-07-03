'use client'

import { useTransition } from 'react'

import { type Todo } from '@/entities/todo'

import { updateTodoAction } from '@/actions'

export default function CheckboxUpdateTodo({ todo }: { todo: Todo }) {
  const [isPending, startTransition] = useTransition()

  return (
    <input
      type="checkbox"
      checked={todo.completed}
      id="completed"
      name="completed"
      onChange={() => startTransition(() => updateTodoAction(todo))}
      disabled={isPending}
      className="min-w-[2rem] min-h-[2rem]"
    />
  )
}
