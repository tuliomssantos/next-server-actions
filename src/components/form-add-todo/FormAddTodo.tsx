import { addTodoAction } from '@/actions/todo/add-todo'

export default function FormAddTodo() {
  return (
    <form action={addTodoAction} className="flex gap-2 items-center">
      <input
        type="text"
        name="title"
        className="text-2xl p-1 rounded-lg flex-grow w-full"
        placeholder="New Todo"
        autoFocus
      />

      <button
        type="submit"
        className="p-2 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-green-500 hover:cursor-pointer hover:bg-green-400"
      >
        Submit
      </button>
    </form>
  )
}
