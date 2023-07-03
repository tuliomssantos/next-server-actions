import { describe, it, expect } from 'vitest'

import { getTodosService } from './get-todos-service'

import { todosMock } from '@/services/todo/mocks'

describe('getTodosService', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should return todos', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(todosMock))

    const todos = await getTodosService()

    expect(todos).toEqual(todosMock)
  })
})
