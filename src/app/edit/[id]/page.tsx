import { TodoComponent } from '@/components/todo'
import { getTodo } from '@/services/todo/get-todo'
import { getTodoService } from '@/services/todo/get-todo/get-todo-service'

import { notFound } from 'next/navigation'

type Props = {
  params: {
    id: string
  }
}

export default async function EditTodoPage({ params: { id } }: Props) {
  const [error, todo] = await getTodo(Number(id), getTodoService)

  if (error) {
    console.log(error)
    return <div>Something went wrong</div>
  }

  if (!todo) notFound()

  return <TodoComponent todo={todo} />
}
