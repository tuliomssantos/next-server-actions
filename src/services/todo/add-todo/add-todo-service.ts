import wretch from 'wretch'

import { IAddTodoService } from './add-todo'

export const addTodoService: IAddTodoService = todo => {
  return wretch('http://127.0.0.1:3500/todos').post(todo).json()
}
