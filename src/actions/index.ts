'use server'

import { type Todo } from '@/entities/todo'

import { updateTodo, updateTodoService } from '@/services/todo/update-todo'

import { revalidatePath } from 'next/cache'

export async function updateTodoAction(todo: Todo) {
  await updateTodo(todo, updateTodoService)

  revalidatePath('/')
}
