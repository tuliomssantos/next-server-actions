import { type Todo } from '@/entities/todo'

export const todoMock: Todo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
}

export const todosMock: Todo[] = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
]
