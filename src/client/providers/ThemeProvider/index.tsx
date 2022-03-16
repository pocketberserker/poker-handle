import React, { useState, useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { getTheme, ColorMode } from "../../constants/theme";
import { ThemeContext } from "../../hooks/Theme";
import { GlobalStyles } from "../GlobalStyles";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>("light");

  const colorMode = useMemo(
    () => ({
      setColorMode: () => {
        setMode((prevMode: ColorMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...getTheme(mode),
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
        },
      }),
    [mode]
  );

  return (
    <StyledEngineProvider injectFirst>
      <GlobalStyles theme={{ background: theme.palette.background }} />
      <MuiThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <ThemeContext.Provider value={colorMode}>
            {children}
          </ThemeContext.Provider>
        </EmotionThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
