import wretch from 'wretch'

import { type IGetTodoService } from './get-todos'

export const getTodoService: IGetTodoService = () => {
  return wretch('https://jsonplaceholder.typicode.com/todos').get().json()
}
