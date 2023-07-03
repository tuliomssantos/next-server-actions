import { describe, it, expect } from 'vitest'

import { getTodo } from './get-todo'

import { todoMock } from '@/services/todo/mocks'

describe('getTodo', () => {
  it('should return todo', async () => {
    const service = async () => todoMock
    const [error, todo] = await getTodo(1, service)
    expect(error).toBe(undefined)
    expect(todo).toStrictEqual(todoMock)
  })

  it('should return an error', async () => {
    const service = async () => {
      throw new Error('An error occurred')
    }
    const [error, todo] = await getTodo(1, service)
    expect(error).toBeInstanceOf(Error)
    expect(todo).toBe(undefined)
  })

  it('should return validation error', async () => {
    const service = async () => {
      return {
        userId: 1,
        id: '1',
        title: 'delectus aut autem',
        completed: false,
      }
    }
    const [error, todo] = await getTodo(1, service)
    expect(error).toBeInstanceOf(Error)
    expect(todo).toBe(undefined)
  })
})
