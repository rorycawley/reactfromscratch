/* eslint-disable @typescript-eslint/no-var-requires */
import '@testing-library/jest-dom'
import 'jest-styled-components'

jest.useFakeTimers()

export const mockNavigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  push: jest.fn(),
  popToTop: jest.fn(),
}
