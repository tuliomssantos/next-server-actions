import Link from 'next/link'

import { Trash2 } from 'lucide-react'

import { type Todo } from '@/entities/todo'

import { CheckboxUpdateTodo } from '@/components/checkbox-update-todo'

export type TodoProps = {
  todo: Todo
}

export default function TodoComponent({ todo }: TodoProps) {
  return (
    <form className="my-4 flex justify-between items-center">
      <label htmlFor="completed" className="text-2xl hover:underline">
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>

      <div className="flex items-center gap-4">
        {/* add checkbox */}
        <CheckboxUpdateTodo todo={todo} />

        {/* add delete button */}
        <button
          type="button"
          className="text-red-500 hover:text-red-700"
          //   onClick={() => {}}
        >
          <Trash2 size={24} />
        </button>
      </div>
    </form>
  )
}
