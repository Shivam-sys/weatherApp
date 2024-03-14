import Router from './Router'
import { ThemeProvider, createTheme } from '@mui/material'

function App() {
  const theme = createTheme({})
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
