import React, { useState, useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { getTheme, ColorMode, wordle, extras } from "../../constants/theme";
import { ThemeContext } from "../../hooks/Theme";
import { GlobalStyles } from "../GlobalStyles";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>("light");

  const colorMode = useMemo(
    () => ({
      setColorMode: (mode: ColorMode) => {
        setMode(mode);
      },
    }),
    []
  );

  const theme = useMemo(
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
        wordle,
        extras,
        components: {
          MuiSwitch: {
            styleOverrides: {
              switchBase: {
                "&.Mui-checked": {
                  color: wordle.correct,
                },
                "&.Mui-checked+.MuiSwitch-track": {
                  backgroundColor: wordle.correct,
                },
              },
            },
          },
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
