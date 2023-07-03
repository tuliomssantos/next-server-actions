import wretch from 'wretch'

import { type IGetTodosService } from './get-todos'

export const getTodosService: IGetTodosService = () => {
  return wretch('http://127.0.0.1:3500/todos').get().json()
}
