import React, { useState, useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { useMobile } from "../../hooks/MediaQuery";
import { useMessage } from "../../hooks/MessageSnackbar";
import { useCorrectAnswer } from "../../hooks/CorrectAnswerSnackbar";
import { Hands } from "../Hands";
import { Board } from "../../molecules/Board";
import { Guess } from "../../guess";
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

const checkCorrect = (
  common: poker.Card[],
  target: poker.Card,
  index: number
): boolean => {
  // The flop cards are treated as correct if it is included flop range.
  if (index < 3) {
    return (
      common.slice(0, 3).findIndex((c) => poker.equalsCard(c, target)) !== -1
    );
  }
  return poker.equalsCard(target, common[index]);
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
  const [absents, setAbsents] = useState([...board.player, ...board.opponent]);
  const [corrects, setCorrects] = useState<poker.Card[]>(
    pickCardsFromGuesses(init, "correct")
  );
  const [partials, setPartials] = useState<poker.Card[]>(
    pickCardsFromGuesses(init, "partial")
  );
  const [partialRanks, setPartialRanks] = useState<poker.Card[]>(
    pickCardsFromGuesses(init, "partial-rank")
  );
  const [finished, setFinished] = useState(
    corrects.length === guesses[0].length || trials > maxTrials
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
    const newRow: Guess[] = [];
    const newAbsents: poker.Card[] = [];
    const newCorrects: poker.Card[] = [];
    const newPartials: poker.Card[] = [];
    const newPartialRanks: poker.Card[] = [];

    for (const [i, s] of guesses[current].entries()) {
      if (s.kind === "blank") {
        showMessage("Not enough cards");
        setChecking(false);
        return;
      } else if (s.kind !== "entered") {
        showMessage("Already checked (bug?)");
        setChecking(false);
        return;
      }

      let kind: "correct" | "absent" | "partial" | "partial-rank" = "absent";
      if (checkCorrect(board.common, s.card, i)) {
        kind = "correct";
        newCorrects.push(s.card);
      } else if (board.common.find((c) => poker.equalsCard(c, s.card))) {
        kind = "partial";
        newPartials.push(s.card);
      } else if (board.common.find((c) => c.rank === s.card.rank)) {
        kind = "partial-rank";
        newPartialRanks.push(s.card);
      } else {
        newAbsents.push(s.card);
      }

      newRow.push({
        kind,
        card: s.card,
      });
    }

    const next = [...guesses];
    next[current] = newRow;
    setGuesses(next);

    setAbsents((prev) => [...prev, ...newAbsents]);
    setCorrects((prev) => {
      const ns: poker.Card[] = [];
      for (const c of newCorrects) {
        if (prev.findIndex((p) => poker.equalsCard(p, c)) === -1) {
          ns.push(c);
        }
      }
      return [...prev, ...ns];
    });
    setPartials((prev) => {
      let ns: poker.Card[] = [...prev];

      for (const c of newPartials) {
        if (ns.findIndex((p) => poker.equalsCard(p, c)) === -1) {
          ns.push(c);
        }
      }

      return ns.filter(
        (p) => newCorrects.findIndex((c) => poker.equalsCard(c, p)) === -1
      );
    });
    setPartialRanks(newPartialRanks);

    setTrials(count + 1);
    setColumn(0);

    let finish = false;
    if (newCorrects.length === guesses[current].length) {
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
          absents={absents}
          corrects={corrects}
          partials={partials}
          partialRanks={partialRanks}
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
        absents={absents}
        corrects={corrects}
        partials={partials}
        partialRanks={partialRanks}
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
