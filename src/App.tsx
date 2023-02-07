
import './App.css'
import { CssBaseline,Button, ThemeProvider } from '@mui/material'
import { appTheme } from './themes/theme'

function App() {

  return (
    <ThemeProvider theme={appTheme}>
     <CssBaseline enableColorScheme />

     <div style={{ margin: "1em" }}>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default App
