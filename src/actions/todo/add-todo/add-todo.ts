'use server'

import { addTodo, addTodoService } from '@/services/todo/add-todo'

import { revalidatePath } from 'next/cache'

export async function addTodoAction(data: FormData) {
  const title = data.get('title') as string

  await addTodo(title, addTodoService)

  revalidatePath('/')
}
