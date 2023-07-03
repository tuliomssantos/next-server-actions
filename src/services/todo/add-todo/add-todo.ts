import { type Todo } from '@/entities/todo'
import { z } from 'zod'

export interface IAddTodoService {
  (todo: Todo): Promise<unknown>
}

export interface IAddTodo {
  (title: string, service: IAddTodoService): Promise<
    [undefined | Error, undefined | string]
  >
}

export const addTodo: IAddTodo = async (title, service) => {
  try {
    const todo: Todo = {
      title,
      completed: false,
      userId: Math.floor(Math.random() * 1000),
      id: Math.floor(Math.random() * 1000),
    }

    await service(todo)

    return [undefined, 'Todo added successfully']
  } catch (error) {
    if (error instanceof z.ZodError) {
      return [error, undefined]
    } else {
      return [new Error('An error occurred'), undefined]
    }
  }
}
