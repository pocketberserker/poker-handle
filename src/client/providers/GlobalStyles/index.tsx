import React from "react";
import { Global, css } from "@emotion/react";

type Props = {
  theme: {
    background: {
      default: string;
    };
  };
};

export const GlobalStyles: React.FC<Props> = ({ theme }) => (
  <Global
    styles={css`
      html {
        font-size: 62.5%;
      }
      body {
        padding: 0;
        margin: 0;
        background: ${theme.background.default};
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
