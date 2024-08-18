import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { colors } from "@mui/material";

// const theme = createTheme({
//   palette: {
//     mode: isDarkMode ? "dark" : "light",
//     primary: {
//       light: colors.deepPurple[300],
//       main: colors.deepPurple[500],
//       dark: colors.deepPurple[700],
//       darker: colors.deepPurple[900],
//     },
//   },
// });

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
    SubSkillGold?: string;
    SubSkillBlue?: string;
    SubSkillWhite?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
    SubSkillGold?: string;
    SubSkillBlue?: string;
    SubSkillWhite?: string;
  }
}

const isDarkMode = true;

const theme = createTheme({
  palette: {
    mode: isDarkMode ? "dark" : "light",
    primary: {
      light: colors.green[300],
      main: colors.green[500],
      dark: colors.green[700],
      darker: colors.green[900],
      SubSkillGold: colors.amber[300],
      SubSkillBlue: colors.blue[100],
      SubSkillWhite: colors.grey[100],
    },
    secondary: colors.lightGreen,
  },
});

export default theme;

// export default function Theme() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//     </ThemeProvider>
//   );
// }
