/* eslint-disable @typescript-eslint/no-unused-vars */
import { CustomerForm } from '@app/CustomerForm'
import { createContainer } from '@test/domManipulators'

import React from 'react'
describe('CustomerForm', () => {
  let render: (component: React.ReactElement) => void
  let container: HTMLDivElement

  beforeEach(() => {
    const obj = createContainer()
    render = obj.render
    container = obj.container as unknown as HTMLDivElement
  })
  const form = (id: string): HTMLFormElement => {
    return container.querySelector(`form[id="${id}"]`) as HTMLFormElement
  }

  it('renders a form', () => {
    render(<CustomerForm />)
    expect(form('customer')).not.toBeNull()
  })
})
