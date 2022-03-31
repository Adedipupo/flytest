import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
    },
    palette: {
      primary: {
        main: '#00378A',
        light: '#E9EEF5',
      },
      secondary: {
        main: '#092C5F',
        light: '#E9EEF5',
      },
    },
  })

  export default customTheme;