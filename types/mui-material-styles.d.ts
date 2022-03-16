import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    wordle: typeof wordle;
  }
  interface ThemeOptions {
    wordle?: typeof wordle;
  }
}
