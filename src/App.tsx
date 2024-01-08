import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { OrderProvider } from './contexts/OrderContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </OrderProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
