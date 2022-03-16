import "@emotion/react";
import { Theme as MuiTheme } from "@mui/material";
import { wordle } from "../src/client/constants/theme";

declare module "@emotion/react" {
  export interface Theme extends MuiTheme {
    wordle: typeof wordle;
  }
}
