import { z } from 'zod'

import { type Todo, todoSchema } from '@/entities/todo'

export interface IGetTodoService {
  (id: number): Promise<unknown>
}

export interface IGetTodo {
  (id: number, service: IGetTodoService): Promise<
    [undefined | Error, undefined | Todo]
  >
}

export const getTodo: IGetTodo = async (id, service) => {
  try {
    const response = await service(id)

    const todo = todoSchema.parse(response)

    return [undefined, todo]
  } catch (error) {
    if (error instanceof z.ZodError) {
      return [error, undefined]
    } else {
      return [new Error('An error occurred'), undefined]
    }
  }
}
