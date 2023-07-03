import { describe, it, expect } from 'vitest'

import { getTodos } from './get-todos'

import { todosMock } from './mocks'

describe('getTodos', () => {
  it('should return todos', async () => {
    const service = async () => todosMock
    const [error, todos] = await getTodos(service)
    expect(error).toBe(undefined)
    expect(todos).toStrictEqual(todosMock)
  })

  it('should return an error', async () => {
    const service = async () => {
      throw new Error('An error occurred')
    }
    const [error, todos] = await getTodos(service)
    expect(error).toBeInstanceOf(Error)
    expect(todos).toBe(undefined)
  })

  it('should return validation error', async () => {
    const service = async () => {
      return [
        {
          userId: 1,
          id: '1',
          title: 'delectus aut autem',
          completed: false,
        },
        {
          userId: 1,
          id: '2',
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
        {
          userId: 1,
          id: '3',
          completed: false,
        },
      ]
    }
    const [error, todos] = await getTodos(service)
    expect(error).toBeInstanceOf(Error)
    expect(todos).toBe(undefined)
  })
})
