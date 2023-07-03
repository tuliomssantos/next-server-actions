import wretch from 'wretch'

import { type IUpdateTodoService } from './update-todo'

export const updateTodoService: IUpdateTodoService = todo => {
  return wretch(`http://127.0.0.1:3500/todos/${todo.id}`)
    .put({
      ...todo,
      completed: !todo.completed,
    })
    .json()
}
