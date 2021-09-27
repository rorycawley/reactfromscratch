import styled from 'styled-components'

const appointmentTimeOfDay = (startsAt: number) => {
  const [h, m] = new Date(startsAt).toTimeString().split(':')
  return `${h}:${m}`
}

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

type AppointmentsDayViewProps = {
  appointments: { startsAt: number }[]
}
export const AppointmentsDayView = ({
  appointments,
}: AppointmentsDayViewProps) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map(appointment => (
        <li key={appointment.startsAt}>
          {appointmentTimeOfDay(appointment.startsAt)}
        </li>
      ))}
    </ol>
    <p>There are no appointments scheduled for today.</p>
  </div>
)
