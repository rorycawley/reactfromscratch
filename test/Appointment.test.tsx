import ReactDOM from 'react-dom'
// import renderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import {
  // Button,
  // AppointmentProps,
  Customer,
  Appointment,
  AppointmentsDayView,
} from '@app/AppointmentsDayView'
import React from 'react'

describe('Appointment', () => {
  let container: ReactDOM.Container
  let customer: Customer = {}

  beforeEach(() => {
    container = document.createElement('div')
  })

  const render = (component: React.ReactElement) => {
    ReactDOM.render(component, container)
  }
  const appointmentTable = () =>
    container.querySelector('#appointmentView > table')

  it('renders a table', () => {
    render(<Appointment customer={customer} />)
    expect(appointmentTable()).not.toBeNull()
  })

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

  it('renders the customer last name', () => {
    customer = { lastName: 'Jones' }
    render(<Appointment customer={customer} />)
    expect(appointmentTable()?.textContent).toMatch('Jones')
  })

  it('renders another customer last name', () => {
    customer = { lastName: 'Smith' }
    render(<Appointment customer={customer} />)
    expect(appointmentTable()?.textContent).toMatch('Smith')
  })

  // it('renders the button', () => {
  //   const tree = renderer.create(<Button />).toJSON()

  //   expect(tree).toHaveStyleRule('color', 'red')
  // })
})

describe('AppointmentsDayView', () => {
  let container: ReactDOM.Container
  const today = new Date()
  const appointments = [
    {
      startsAt: today.setHours(12, 0),
      customer: { firstName: 'Ashley' },
    },
    {
      startsAt: today.setHours(13, 0),
      customer: { firstName: 'Jordan' },
    },
  ]

  beforeEach(() => {
    container = document.createElement('div')
  })
  const render = (component: JSX.Element) => {
    ReactDOM.render(component, container)
  }

  it('renders a div with the right id', () => {
    render(<AppointmentsDayView appointments={[]} />)
    expect(container.querySelector('div#appointmentsDayView')).not.toBeNull()
  })

  it('renders multiple appointments in an ol element', () => {
    render(<AppointmentsDayView appointments={appointments} />)
    expect(container.querySelector('ol')).not.toBeNull()

    expect(container.querySelector('ol')?.children).toHaveLength(2)
  })

  it('renders each appointment in an li', () => {
    render(<AppointmentsDayView appointments={appointments} />)
    expect(container.querySelectorAll('li')).toHaveLength(2)
    expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00')
    expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00')
  })

  it('initially shows a message saying there are no appointments today', () => {
    render(<AppointmentsDayView appointments={[]} />)
    expect(container.textContent).toMatch(
      'There are no appointments scheduled for today.'
    )
  })

  it('selects the first appointment by default', () => {
    render(<AppointmentsDayView appointments={appointments} />)
    expect(container.textContent).toMatch('Ashley')
  })

  it('has a button element in each li', () => {
    render(<AppointmentsDayView appointments={appointments} />)

    const buttonVals = container.querySelectorAll('li > button')
    expect(buttonVals).toHaveLength(2)
    expect((buttonVals[0] as HTMLButtonElement).type).toEqual('button')
  })

  it('renders another appointment when selected', () => {
    render(<AppointmentsDayView appointments={appointments} />)
    const button = container.querySelectorAll('button')[1] as HTMLButtonElement
    ReactTestUtils.Simulate.click(button)
    expect(container.textContent).toMatch('Jordan')
  })
})
