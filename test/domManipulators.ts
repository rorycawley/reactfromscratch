import { DOMElement, DOMAttributes } from 'react'
import ReactDOM from 'react-dom'

export const createContainer = () => {
  const container = document.createElement('div')
  return {
    render: (component: DOMElement<DOMAttributes<Element>, Element>) => {
      ReactDOM.render(component, container)
    },
    container,
  }
}
