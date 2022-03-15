import React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { theme as colorTheme } from "../../constants/theme";
import { GlobalStyles } from "../GlobalStyles";

type Props = {
  children: React.ReactNode;
};

const theme = createTheme({
  palette: {
    primary: {
      main: colorTheme.colors.primary,
    },
  },
  typography: {
    fontSize: 12,
    htmlFontSize: 10,
  },
});

export const ThemeProvider: React.FC<Props> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <GlobalStyles />
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={colorTheme}>{children}</EmotionThemeProvider>
    </MuiThemeProvider>
  </StyledEngineProvider>
);
