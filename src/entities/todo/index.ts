import { z } from 'zod'

export const todoSchema = z.object({
  userId: z.number(),
  id: z.string(),
  title: z.string(),
  completed: z.boolean(),
})

export type Todo = z.infer<typeof todoSchema>

export const todosSchema = z.array(todoSchema)
