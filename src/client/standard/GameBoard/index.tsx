import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMessage } from "../../hooks/MessageSnackbar";
import { useCorrectAnswer } from "../../hooks/CorrectAnswerSnackbar";
import { useAnimation } from "../../hooks/Animation";
import { GameBoardLayout } from "../../organisms/GameBoardLayout";
import { HandsArea } from "../../organisms/HandsArea";
import { Board } from "../Board";
import { Guess, Diff, matchTheAnswers, collectDiff } from "../../guess";
import { Board as BoardModel } from "../../generator";
import * as poker from "../../../poker";
import { maxTrials } from "../../constants/meta";

type Props = {
  board: BoardModel;
  init: Guess[][];
  alreadyAnswered: boolean;
  debug: boolean;
  play: () => void;
  save: (guesses: Guess[][]) => void;
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
  debug,
  play,
  save,
}) => {
  const { showMessage } = useMessage();
  const { showCorrectAnswer } = useCorrectAnswer();
  const { reversing, playReverse, shaking, playShake } = useAnimation();
  const { t } = useTranslation();

  const allHands = useMemo(
    () => [...board.player, ...board.opponents.flat()],
    [board]
  );

  const initialLastAnsweredRow = useMemo(
    () =>
      Math.max(
        ...init.map((row, i) => (row.every((g) => g.kind !== "blank") ? i : -1))
      ),
    [init]
  );

  const [guesses, setGuesses] = useState(init);
  const [trials, setTrials] = useState(alreadyAnswered ? maxTrials + 1 : 1);
  const [column, setColumn] = useState(
    alreadyAnswered ? init[init.length - 1].length : 0
  );
  const [diff, setDiff] = useState<Diff>({
    absents: allHands,
    corrects: pickCardsFromGuesses(init, "correct"),
    partials: pickCardsFromGuesses(init, "partial"),
    partialRanks: pickCardsFromGuesses(init, "partial-rank"),
  });
  const [tmpDiff, setTmpDiff] = useState<Diff>(diff);
  const [completed, setCompleted] = useState(
    diff.corrects.length === guesses[0].length
  );
  const [finished, setFinished] = useState(completed || trials > maxTrials);
  const [checking, setChecking] = useState(false);

  const [playerCategory, opponentCategories] = useMemo(
    () => [
      poker.getRankCategory(poker.evaluate([...board.common, ...board.player])),
      board.opponents.map((opponent) =>
        poker.getRankCategory(poker.evaluate([...board.common, ...opponent]))
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
      showMessage(t("duplicate"));
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
    const answers = matchTheAnswers(guesses[current], board.common, t);
    if (typeof answers === "string") {
      showMessage(answers);
      playShake(current);
      return;
    }

    const next = [...guesses];
    next[current] = answers.guesses;
    setGuesses(next);
    save(next);

    setTmpDiff((prev) => collectDiff(prev, answers, board.common, allHands));

    setTrials(count + 1);
    setColumn(0);

    const complete = answers.corrects.length === guesses[current].length;
    setCompleted(complete);
    let finish = complete || count >= maxTrials;
    setFinished(finish);

    playReverse(current);
  };

  const handleEnter = () => {
    if (checking || finished) {
      return;
    }

    setChecking(true);

    checkAnswer(trials - 1, trials);
  };

  useEffect(() => {
    if (reversing === false && finished === false) {
      setDiff(tmpDiff);
      setChecking(false);
    }
  }, [reversing, finished, tmpDiff]);

  useEffect(() => {
    if (shaking === false) {
      setChecking(false);
    }
  }, [shaking]);

  return (
    <GameBoardLayout
      hashtag="#Poker_Handle"
      board={
        <>
          <HandsArea
            members={(
              [{ name: t("game.you"), cards: board.player }] as {
                name: string;
                cards: [poker.Card, poker.Card];
                category?: poker.Category;
              }[]
            ).concat(
              board.opponents.length === 1
                ? []
                : [
                    {
                      name: `${t("game.opponent")}1`,
                      cards: board.opponents[0],
                      category: opponentCategories[0],
                    },
                  ]
            )}
            small={board.opponents.length > 1}
          />
          <Board
            guesses={guesses}
            initialAnsweredRow={initialLastAnsweredRow}
          />
          <HandsArea
            members={board.opponents
              .slice(board.opponents.length === 1 ? 0 : 1)
              .map((cards, i) => {
                const offset = board.opponents.length === 1 ? 0 : 1;
                return {
                  name: `${t("game.opponent")}${i + offset + 1}`,
                  cards,
                  category: opponentCategories[i + offset],
                };
              })}
            small={board.opponents.length > 1}
          />
        </>
      }
      guesses={guesses}
      diff={diff}
      trials={trials}
      finished={finished}
      completed={completed}
      debug={debug}
      play={play}
      handleSelect={handleSelect}
      handleBackspace={handleBackspace}
      handleEnter={handleEnter}
      showCorrectAnswer={() =>
        showCorrectAnswer(board.common, playerCategory, opponentCategories)
      }
      onFinish={() => setChecking(false)}
    />
  );
};
