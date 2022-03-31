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
        main: '#BE0C8A',
        light: '',
      },
      secondary: {
        main: '#722A8D',
        light: '',
      },
    },
  })

  export default customTheme;