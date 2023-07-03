import wretch from 'wretch'

import { type IGetTodoService } from './get-todo'

export const getTodoService: IGetTodoService = id => {
  return wretch(`http://127.0.0.1:3500/todos/${id}`).get().json()
}
