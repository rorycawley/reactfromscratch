import ReactDOM from 'react-dom'

export const createContainer = () => {
  const container: HTMLDivElement = document.createElement('div')
  return {
    render: (component: React.ReactElement): void => {
      ReactDOM.render(component, container)
    },
    container: HTMLDivElement,
  }
}
