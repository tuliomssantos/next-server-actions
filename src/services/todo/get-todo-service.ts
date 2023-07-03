import wretch from 'wretch'

import { type IGetTodoService } from './get-todos'

export const getTodoService: IGetTodoService = () => {
  return wretch('http://127.0.0.1:3500/todos').get().json()
}
