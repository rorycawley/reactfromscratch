type Customer = {
  customer: {
    firstName: string
  }
}

export const Appointment = ({ customer }: Customer) => (
  <div>{customer.firstName}</div>
)
