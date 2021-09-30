import { CustomerForm } from '@app/CustomerForm'
import { createContainer } from '@test/domManipulators'
import { DOMElement, DOMAttributes } from 'react'

describe('CustomerForm', () => {
  let render: {
    (component: DOMElement<DOMAttributes<Element>, Element>): void
  }
  let container: HTMLDivElement

  beforeEach(() => {
    const obj = createContainer()
    render = obj.render
    container = obj.container
  })

  const form = (id: string) => container.querySelector(`form[id="${id}"]`)

  it('renders a form', () => {
    render((<CustomerForm />) as DOMElement<DOMAttributes<Element>, Element>)
    expect(form('customer')).not.toBeNull()
  })
})
