import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Button } from "../../atoms/Button";
import { useMessage } from "../../hooks/MessageSnackbar";
import { Guess } from "../../guess";

type Props = {
  guesses: Guess[][];
  className?: string;
};

const guessToSquare = (guess: Guess, light: boolean): string => {
  if (guess.kind === "correct") {
    return "🟩";
  } else if (guess.kind === "partial") {
    return "🟨";
  } else if (guess.kind === "partial-rank") {
    return "🟦";
  } else {
    return "light" ? "⬜" : "⬛";
  }
};

export const ShareButton: React.FC<Props> = ({ guesses, className }) => {
  const { showMessage } = useMessage();
  const theme = useTheme();
  const { t } = useTranslation();

  const shareText = useMemo(() => {
    const count = guesses.findIndex((row) =>
      row.every((guess) => guess.kind === "correct")
    );
    const guessCount = count === -1 ? "X" : count + 1;

    const title = `#Poker_Handle ${guessCount}/6`;
    const guessString = guesses
      .filter((row) =>
        row.every((guess) => guess.kind !== "blank" && guess.kind !== "entered")
      )
      .map((row) =>
        row
          .map((guess) => guessToSquare(guess, theme.palette.mode === "light"))
          .join("")
      )
      .join("\n");

    return [title, guessString].join("\n");
  }, [guesses, theme]);

  return (
    <CopyButton
      className={className}
      click={() => {
        navigator.clipboard.writeText(shareText);
        showMessage(t("copy"));
      }}
    >
      {t("share")}
    </CopyButton>
  );
};

const CopyButton = styled(Button)`
  width: 128px;
  height: 42px;
  font-weight: bold;
`;
