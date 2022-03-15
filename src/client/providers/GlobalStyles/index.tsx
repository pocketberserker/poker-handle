import React from "react";
import { Global, css } from "@emotion/react";
import { theme } from "../../constants/theme";

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      html {
        font-size: 62.5%;
      }
      body {
        padding: 0;
        margin: 0;
        color: #333;
        background: ${theme.colors.background};
        font-size: 1.4rem;
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
          "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Meiryo", "メイリオ",
          sans-serif;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      *:focus {
        outline: none;
      }
    `}
  />
);
