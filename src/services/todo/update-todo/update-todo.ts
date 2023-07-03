import { z } from 'zod'

import { type Todo, todoSchema } from '@/entities/todo'

export interface IUpdateTodoService {
  (todo: Todo): Promise<unknown>
}

export interface IUpdateTodo {
  (todo: Todo, service: IUpdateTodoService): Promise<
    [undefined | Error, undefined | Todo]
  >
}

export const updateTodo: IUpdateTodo = async (todo, service) => {
  try {
    const response = await service(todo)

    const validatedTodo = todoSchema.parse(response)

    return [undefined, validatedTodo]
  } catch (error) {
    if (error instanceof z.ZodError) {
      return [error, undefined]
    } else {
      return [new Error('An error occurred'), undefined]
    }
  }
}
