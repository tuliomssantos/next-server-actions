import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import Page from './page'

describe('Page', () => {
  it('renders', () => {
    render(<Page />)
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })
})
