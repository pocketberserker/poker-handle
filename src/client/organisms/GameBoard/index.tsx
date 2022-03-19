import React, { useState, useMemo } from "react";
import { useMessage } from "../../hooks/MessageSnackbar";
import { useCorrectAnswer } from "../../hooks/CorrectAnswerSnackbar";
import { GameBoardLayout } from "../GameBoardLayout";
import { Hands } from "../Hands";
import { Board } from "../../molecules/Board";
import { Guess, Diff, matchTheAnswers, collectDiff } from "../../guess";
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
  const [completed, setCompleted] = useState(
    diff.corrects.length === guesses[0].length
  );
  const [finished, setFinished] = useState(completed || trials > maxTrials);
  const [checking, setChecking] = useState(false);

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

    setDiff((prev) =>
      collectDiff(prev, answers, [...board.player, ...board.opponent])
    );

    setTrials(count + 1);
    setColumn(0);

    const complete = answers.corrects.length === guesses[current].length;
    setCompleted(complete);
    let finish = complete || count >= maxTrials;
    setFinished(finish);

    if (finish === false) {
      setChecking(false);
    }
  };

  const handleEnter = () => {
    if (checking || finished) {
      return;
    }

    setChecking(true);

    checkAnswer(trials - 1, trials);
  };

  return (
    <GameBoardLayout
      board={
        <>
          <Hands name="you" cards={board.player} />
          <Board guesses={guesses} />
          <Hands
            name="other"
            cards={board.opponent}
            category={opponentCategory}
          />
        </>
      }
      guesses={guesses}
      diff={diff}
      trials={trials}
      finished={finished}
      completed={completed}
      play={play}
      handleSelect={handleSelect}
      handleBackspace={handleBackspace}
      handleEnter={handleEnter}
      showCorrectAnswer={() =>
        showCorrectAnswer(board.common, playerCategory, opponentCategory)
      }
      onFinish={() => setChecking(false)}
    />
  );
};
