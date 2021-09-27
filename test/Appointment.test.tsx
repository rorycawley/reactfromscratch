import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import 'jest-styled-components'

import { Button, Appointment } from '@app/Appointment'

describe('Appointment', () => {
  it('renders the customer first name', () => {
    const customer = { firstName: 'Ashley' }
    const component = <Appointment customer={customer} />
    const container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(component, container)
    expect(document.body.textContent).toMatch('Ashley')
  })

  it('renders the button', () => {
    const tree = renderer.create(<Button />).toJSON()

    expect(tree).toHaveStyleRule('color', 'red')
  })
})
