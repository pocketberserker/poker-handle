import React, { useState, useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { useMobile } from "../../hooks/MediaQuery";
import { useMessage } from "../../hooks/MessageSnackbar";
import { useCorrectAnswer } from "../../hooks/CorrectAnswerSnackbar";
import { Hands } from "../Hands";
import { Board } from "../../molecules/Board";
import { Guess, Diff, matchTheAnswers, collectDiff } from "../../guess";
import { InputPanel } from "../../organisms/InputPanel";
import { ResultDialog } from "../ResultDialog";
import { Board as BoardModel } from "../../generator";
import * as poker from "../../../poker";
import { maxTrials } from "../../constants/meta";

type Props = {
  board: BoardModel;
  init: Guess[][];
  alreadyAnswered: boolean;
  play: () => void;
};

const pickCardsFromGuesses = (
  guesses: Guess[][],
  kind: "correct" | "partial" | "partial-rank"
): poker.Card[] => {
  const corrects: poker.Card[] = [];

  for (const row of guesses) {
    for (const guess of row) {
      if (guess.kind !== kind) {
        continue;
      }
      if (corrects.findIndex((c) => poker.equalsCard(c, guess.card)) === -1) {
        corrects.push(guess.card);
      }
    }
  }

  return corrects;
};

export const GameBoard: React.FC<Props> = ({
  board,
  init,
  alreadyAnswered,
  play,
}) => {
  const { isMobile } = useMobile();

  const { showMessage } = useMessage();
  const { showCorrectAnswer } = useCorrectAnswer();

  const [guesses, setGuesses] = useState(init);
  const [trials, setTrials] = useState(alreadyAnswered ? maxTrials + 1 : 1);
  const [column, setColumn] = useState(
    alreadyAnswered ? init[init.length].length : 0
  );
  const [diff, setDiff] = useState<Diff>({
    absents: [...board.player, ...board.opponent],
    corrects: pickCardsFromGuesses(init, "correct"),
    partials: pickCardsFromGuesses(init, "partial"),
    partialRanks: pickCardsFromGuesses(init, "partial-rank"),
  });
  const [finished, setFinished] = useState(
    diff.corrects.length === guesses[0].length || trials > maxTrials
  );

  const [checking, setChecking] = useState(false);
  const [openResultDialog, setOpenResultDialog] = useState(false);

  const [playerCategory, opponentCategory] = useMemo(
    () => [
      poker.getRankCategory(poker.evaluate([...board.common, ...board.player])),
      poker.getRankCategory(
        poker.evaluate([...board.common, ...board.opponent])
      ),
    ],
    [board]
  );

  const handleSelect = (card: poker.Card) => {
    if (checking || finished || trials > maxTrials) {
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
      showMessage("Duplicate card");
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
    if (checking || finished || column <= 0) {
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
    const answers = matchTheAnswers(guesses[current], board.common);
    if (typeof answers === "string") {
      showMessage(answers);
      setChecking(false);
      return;
    }

    const next = [...guesses];
    next[current] = answers.guesses;
    setGuesses(next);

    setDiff((prev) => collectDiff(prev, answers));

    setTrials(count + 1);
    setColumn(0);

    let finish = false;
    if (answers.corrects.length === guesses[current].length) {
      finish = true;
    } else if (count >= maxTrials) {
      finish = true;
      showCorrectAnswer(board.common, playerCategory, opponentCategory);
    }

    // TODO: move to after animations
    if (finish) {
      setOpenResultDialog(true);
      setFinished(finish);
    }
    setChecking(false);
  };

  const handleEnter = () => {
    if (checking || finished) {
      return;
    }

    setChecking(true);

    checkAnswer(trials - 1, trials);
  };

  const handleCloseResultDialog = () => {
    setOpenResultDialog(false);
  };

  useEffect(() => {
    if (finished) {
      // TODO: animation
    }
  }, [finished]);

  if (isMobile) {
    return (
      <>
        <MobileMainBoard>
          <Hands name="you" cards={board.player} />
          <Board guesses={guesses} />
          <Hands
            name="other"
            cards={board.opponent}
            category={opponentCategory}
          />
        </MobileMainBoard>
        <MobileInput
          diff={diff}
          handleSelect={handleSelect}
          handleEnter={handleEnter}
          handleBackspace={handleBackspace}
        />
        <ResultDialog
          guesses={guesses}
          open={openResultDialog}
          close={handleCloseResultDialog}
          play={play}
        />
      </>
    );
  }

  return (
    <>
      <MainBoard>
        <Hands name="you" cards={board.player} />
        <Board guesses={guesses} />
        <Hands
          name="other"
          cards={board.opponent}
          category={opponentCategory}
        />
      </MainBoard>
      <Input
        diff={diff}
        handleSelect={handleSelect}
        handleEnter={handleEnter}
        handleBackspace={handleBackspace}
      />
      <ResultDialog
        guesses={guesses}
        open={openResultDialog}
        close={handleCloseResultDialog}
        play={play}
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
