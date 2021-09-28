import { useState } from 'react'
// import styled from 'styled-components'

const appointmentTimeOfDay = (startsAt = 0) => {
  const [h, m] = new Date(startsAt).toTimeString().split(':')
  return `${h}:${m}`
}

// export const Button = styled.button`
//   color: red;
// `
export type Customer = {
  firstName?: string
  lastName?: string
  phoneNumber?: string
}

export type AppointmentProps = {
  customer: Customer
  service?: string
  stylist?: string
  notes?: string
  startsAt?: number
}

export const Appointment = ({
  customer,
  service,
  stylist,
  notes,
  startsAt,
}: AppointmentProps) => (
  <div id="appointmentView">
    <h3>Today&rsquo;s appointment at {appointmentTimeOfDay(startsAt)}</h3>
    <table>
      <tbody>
        <tr>
          <td>Customer</td>
          <td>
            {customer.firstName} {customer.lastName}
          </td>
        </tr>
        <tr>
          <td>Phone number</td>
          <td>{customer.phoneNumber}</td>
        </tr>
        <tr>
          <td>Stylist</td>
          <td>{stylist}</td>
        </tr>
        <tr>
          <td>Service</td>
          <td>{service}</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>{notes}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

type AppointmentsDayViewProps = {
  appointments: AppointmentProps[]
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
            <button
              className={i === selectedAppointment ? 'toggled' : ''}
              type="button"
              onClick={() => setSelectedAppointment(i)}
            >
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
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
