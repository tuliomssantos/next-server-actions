import { getTodosService, getTodos } from '@/services'

import { TodoComponent } from '@/components/todo'

export default async function TodoList() {
  const [error, todos] = await getTodos(getTodosService)

  if (error || !todos) {
    console.log(error)
    return <div>Something went wrong</div>
  }

  if (!todos.length) return <div>No todos Avaiable</div>

  const sortedTodos = todos.reverse()

  return (
    <>
      {sortedTodos.map(todo => (
        <TodoComponent key={todo.id} todo={todo} />
      ))}
    </>
  )
}
