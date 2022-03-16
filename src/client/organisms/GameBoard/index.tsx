import React, { useState } from "react";
import styled from "@emotion/styled";
import { useMobile } from "../../hooks/MediaQuery";
import { Hands } from "../Hands";
import { Board } from "../../molecules/Board";
import { Guess } from "../../guess";
import { InputPanel } from "../../organisms/InputPanel";
import { Board as BoardModel } from "../../generator";
import * as poker from "../../../poker";
import { maxTrials } from "../../constants/meta";

type Props = {
  board: BoardModel;
  init: Guess[][];
  alreadyAnswered: boolean;
};

export const GameBoard: React.FC<Props> = ({
  board,
  init,
  alreadyAnswered,
}) => {
  const { isMobile } = useMobile();
  const [guesses, setGuesses] = useState(init);
  const [trials, setTrials] = useState(alreadyAnswered ? maxTrials + 1 : 1);
  const [column, setColumn] = useState(
    alreadyAnswered ? init[init.length].length : 0
  );
  const [checking, setChecking] = useState(false);

  const handleSelect = (card: poker.Card) => {
    if (checking || trials > maxTrials) {
      return;
    }

    const row = trials - 1;
    const current = guesses[row];

    if (column >= current.length) {
      return;
    }
    if (
      current.find(
        (s) => s.kind === "entered" && poker.equalsCard(s.card, card)
      )
    ) {
      // TODO: show duplicate card warning message
      return;
    }

    const newRow = [...current];
    newRow[column] = {
      kind: "entered",
      card,
    };

    const next = [...guesses];
    next[row] = newRow;
    setGuesses(next);

    setColumn(column + 1);
  };

  const handleBackspace = () => {
    if (checking || column <= 0) {
      return;
    }

    const row = trials - 1;
    const current = guesses[row];

    const newRow = [...current];
    newRow[column > 0 ? column - 1 : 0] = {
      kind: "blank",
    };

    const next = [...guesses];
    next[row] = newRow;
    setGuesses(next);

    setColumn(column - 1);
  };

  const checkAnswer = async (current: number, count: number) => {
    const newRow: Guess[] = [];

    for (const [i, s] of guesses[current].entries()) {
      // TODO: show error message
      if (s.kind !== "entered") {
        return;
      }

      let kind: "correct" | "absent" | "partial-match" = "absent";
      if (poker.equalsCard(s.card, board.common[i])) {
        kind = "correct";
      } else if (board.common.find((c) => poker.equalsCard(c, s.card))) {
        kind = "partial-match";
      }

      newRow.push({
        kind,
        card: s.card,
      });
    }

    const next = [...guesses];
    next[current] = newRow;
    setGuesses(next);

    setTrials(count + 1);
    setColumn(0);

    // TODO: move to after animations
    setChecking(false);
  };

  const handleEnter = () => {
    if (checking) {
      return;
    }

    setChecking(true);

    checkAnswer(trials - 1, trials);
  };

  if (isMobile) {
    return (
      <>
        <MobileMainBoard>
          <Hands name="you" cards={board.player} />
          <Board guesses={guesses} />
          <Hands name="other" cards={board.opponent} />
        </MobileMainBoard>
        <MobileInput
          hands={[...board.player, ...board.opponent]}
          handleSelect={handleSelect}
          handleEnter={handleEnter}
          handleBackspace={handleBackspace}
        />
      </>
    );
  }

  return (
    <>
      <MainBoard>
        <Hands name="you" cards={board.player} />
        <Board guesses={guesses} />
        <Hands name="other" cards={board.opponent} />
      </MainBoard>
      <Input
        hands={[...board.player, ...board.opponent]}
        handleSelect={handleSelect}
        handleEnter={handleEnter}
        handleBackspace={handleBackspace}
      />
    </>
  );
};

const MainBoard = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileMainBoard = styled(MainBoard)`
  margin-top: 12px;
`;

const Input = styled(InputPanel)`
  margin-top: 40px;
  max-width: 400px;
`;

const MobileInput = styled(Input)`
  margin-top: 10px;
  width: 98%;
`;
