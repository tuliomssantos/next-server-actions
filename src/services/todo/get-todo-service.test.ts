import { describe, it, expect } from 'vitest'

import { getTodoService } from './get-todo-service'
import { todosMock } from './mocks'

describe('getTodoService', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should return todos', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(todosMock))

    const todos = await getTodoService()

    expect(todos).toEqual(todosMock)
  })
})
