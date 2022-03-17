import React, { useState, createContext, useContext } from "react";
import styled from "@emotion/styled";
import { Snackbar, Typography } from "@mui/material";
import { CloseButton } from "../molecules/CloseButton";
import { Card } from "../molecules/Card";
import * as poker from "../../poker";

export const CorrectAnswerSnackbarContext = createContext<
  (
    cards: poker.Card[],
    player: poker.Category,
    opponent: poker.Category
  ) => void
>(() => {});

type Props = {
  children: React.ReactNode;
};

export const CorrectAnswerSnackbarProvider: React.FC<Props> = ({
  children,
}) => {
  const [correct, setCorrect] = useState<poker.Card[]>([]);
  const [player, setPlayer] = useState<poker.Category>("High Card");
  const [opponent, setOpponent] = useState<poker.Category>("High Card");
  const [open, setOpen] = React.useState(false);

  const handleOpen = (
    cards: poker.Card[],
    player: poker.Category,
    opponent: poker.Category
  ) => {
    setCorrect(cards);
    setPlayer(player);
    setOpponent(opponent);
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
          <CardList>
            {correct.map((card) => (
              <Card
                key={poker.stringify(card)}
                card={card}
                width={60}
                height={88}
              />
            ))}
          </CardList>
          <Categories>
            <Category variant="h5">{player}</Category>
            <Category variant="h5">{opponent}</Category>
          </Categories>
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
  flex-direction: column;
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? theme.extras.black : theme.extras.white};
  position: relative;
`;

const ResizedCloseButton = styled(CloseButton)`
  min-width: 18px;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 0;
  right: 5px;
  z-index: 1500;
`;

const CardList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Categories = styled.div`
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Category = styled(Typography)`
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? theme.extras.white : theme.extras.black};
`;

export const useCorrectAnswer = () => {
  const showCorrectAnswer = useContext(CorrectAnswerSnackbarContext);
  return {
    showCorrectAnswer,
  };
};
