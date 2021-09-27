import styled from 'styled-components'

export const Button = styled.button`
  color: red;
`

type Customer = {
  customer: {
    firstName: string
  }
}

export const Appointment = ({ customer }: Customer) => (
  <div>
    {customer.firstName} <Button>Press Me</Button>
  </div>
)
