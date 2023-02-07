import { useMemo, useState } from 'react';
import './App.css'
import { CssBaseline,Button,PaletteMode,ThemeProvider, createTheme } from '@mui/material'
import { appTheme } from './themes/theme'
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { ColorContext } from "./ColorContext";
import { SwitchModeButton } from './components/SwitchModeButton';

function App() {

  const [mode, setMode] = useState<PaletteMode>("light");


  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );


  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>

    <ThemeProvider theme={theme}>
     <CssBaseline enableColorScheme />
     <SwitchModeButton />
    </ThemeProvider>
    </ColorContext.Provider>
  )
}

export default App
