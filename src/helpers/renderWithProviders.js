import React from 'react'
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components'
import { theme } from '../assets/styles/theme'
import { render } from '@testing-library/react'
import UsersContext from '../context/UsersContext'

export const renderWithProviders = (children) => {
   return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}