import styled from 'styled-components'

export const Button = styled.button`
  color: red;
`

type AppointmentProps = {
  customer: {
    firstName: string
  }
}

export const Appointment = ({ customer }: AppointmentProps) => (
  <div>{customer.firstName}</div>
)
