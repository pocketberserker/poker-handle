import "@mui/material/styles";
import { wordle, extras } from "../src/client/constants/theme";

declare module "@mui/material/styles" {
  interface Theme {
    wordle: typeof wordle;
    extras: typeof extras;
  }
  interface ThemeOptions {
    wordle?: typeof wordle;
    extras?: typeof extras;
  }
}
