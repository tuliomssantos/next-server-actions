import { describe, it, expect } from 'vitest'

import { getTodoService } from './get-todo-service'

import { todoMock } from '@/services/todo/mocks'

describe('getTodoService', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should return todo', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(todoMock))

    const todo = await getTodoService(1)

    expect(todo).toEqual(todoMock)
  })
})
