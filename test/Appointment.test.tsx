import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { Button, Appointment } from '@app/Appointment'

describe('Appointment', () => {
  let container: ReactDOM.Container
  let customer: {
    firstName: string
  }

  beforeEach(() => {
    container = document.createElement('div')
  })

  const render = (component: JSX.Element) => {
    ReactDOM.render(component, container)
  }

  it('renders the customer first name', () => {
    customer = { firstName: 'Ashley' }

    render(<Appointment customer={customer} />)

    expect(container.textContent).toMatch('Ashley')
  })

  it('renders another customer first name', () => {
    customer = { firstName: 'Jordan' }
    render(<Appointment customer={customer} />)
    expect(container.textContent).toMatch('Jordan')
  })

  it('renders the button', () => {
    const tree = renderer.create(<Button />).toJSON()

    expect(tree).toHaveStyleRule('color', 'red')
  })
})
