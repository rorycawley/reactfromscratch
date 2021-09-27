import { useState } from 'react'
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
  appointments: {
    startsAt: number
    customer: {
      firstName: string
    }
  }[]
}

export const AppointmentsDayView = ({
  appointments,
}: AppointmentsDayViewProps) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0)

  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button type="button" onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>{' '}
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
      ) : (
        <Appointment {...appointments[selectedAppointment]} />
      )}
    </div>
  )
}
