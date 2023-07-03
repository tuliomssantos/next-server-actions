import { FormAddTodo } from '@/components/form-add-todo'
import TodoList from '@/components/todo-list/TodoList'

export default function Page() {
  return (
    <div data-testid="home-page">
      <FormAddTodo />
      <TodoList />
    </div>
  )
}
