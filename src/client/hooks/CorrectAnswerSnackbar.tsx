import React, { useState, createContext, useContext } from "react";
import styled from "@emotion/styled";
import { Snackbar } from "@mui/material";
import { CloseButton } from "../molecules/CloseButton";
import { Card } from "../molecules/Card";
import * as poker from "../../poker";

export const CorrectAnswerSnackbarContext = createContext<
  (cards: poker.Card[]) => void
>(() => {});

type Props = {
  children: React.ReactNode;
};

export const CorrectAnswerSnackbarProvider: React.FC<Props> = ({
  children,
}) => {
  const [correct, setCorrect] = useState<poker.Card[]>([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (cards: poker.Card[]) => {
    setCorrect(cards);
    setOpen(true);
  };

  const handleClose = (
    _event?: Event | React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <CorrectAnswerSnackbarContext.Provider value={handleOpen}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
      >
        <AnswerContainer>
          <ResizedCloseButton click={handleClose} />
          {correct.map((card) => (
            <Card
              key={poker.stringify(card)}
              card={card}
              width={60}
              height={88}
            />
          ))}
        </AnswerContainer>
      </Snackbar>
      {children}
    </CorrectAnswerSnackbarContext.Provider>
  );
};

const AnswerContainer = styled.div`
  min-width: 288px;
  padding: 30px 30px 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#000" : "#ffffff"};
  position: relative;
`;

const ResizedCloseButton = styled(CloseButton)`
  min-width: 18px;
  width: 18px;
  height: 18px;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#ffffff" : "#000"};
  position: absolute;
  top: 0;
  right: 5px;
  z-index: 1500;

  &:hover {
    background: ${({ theme }) =>
      theme.palette.mode === "light" ? "#ffffff" : "#000"};
  }
`;

export const useCorrectAnswer = () => {
  const showCorrectAnswer = useContext(CorrectAnswerSnackbarContext);
  return {
    showCorrectAnswer,
  };
};
