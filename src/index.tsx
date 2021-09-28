import ReactDOM from 'react-dom'
import { AppointmentsDayView } from '@app/AppointmentsDayView'
import { sampleAppointments } from '@app/samepleData'

ReactDOM.render(
  <AppointmentsDayView appointments={sampleAppointments} />,
  document.getElementById('root')
)
