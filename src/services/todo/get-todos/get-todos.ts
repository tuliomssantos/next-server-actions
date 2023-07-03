import { z } from 'zod'

import { type Todo, todosSchema } from '@/entities/todo'

export interface IGetTodosService {
  (): Promise<unknown>
}

export interface IGetTodos {
  (service: IGetTodosService): Promise<[undefined | Error, undefined | Todo[]]>
}

export const getTodos: IGetTodos = async service => {
  try {
    const response = await service()

    const todos = todosSchema.parse(response)

    return [undefined, todos]
  } catch (error) {
    if (error instanceof z.ZodError) {
      return [error, undefined]
    } else {
      return [new Error('An error occurred'), undefined]
    }
  }
}
