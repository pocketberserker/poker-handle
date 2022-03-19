import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useMobile } from "../../hooks/MediaQuery";
import { Card } from "../../../poker";
import { Guess, Diff } from "../../guess";
import { InputPanel } from "../../organisms/InputPanel";
import { ResultDialog } from "../ResultDialog";
import { maxTrials } from "../../constants/meta";

type Props = {
  board: React.ReactNode;
  guesses: Guess[][];
  diff: Diff;
  trials: number;
  finished: boolean;
  completed: boolean;
  play: () => void;
  handleSelect: (card: Card) => void;
  handleBackspace: () => void;
  handleEnter: () => void;
  showCorrectAnswer: () => void;
  onFinish: () => void;
};

export const GameBoardLayout: React.FC<Props> = ({
  board,
  guesses,
  diff,
  trials,
  finished,
  completed,
  play,
  handleSelect,
  handleBackspace,
  handleEnter,
  showCorrectAnswer,
  onFinish,
}) => {
  const { isMobile } = useMobile();

  const [openResultDialog, setOpenResultDialog] = useState(false);

  const handleCloseResultDialog = () => {
    setOpenResultDialog(false);
  };

  useEffect(() => {
    if (finished) {
      // TODO: animation
      if (trials > maxTrials && completed === false) {
        showCorrectAnswer();
      }
      setOpenResultDialog(true);
      onFinish();
    }
  }, [finished, trials, completed]);

  if (isMobile) {
    return (
      <>
        <MobileMainBoard>{board}</MobileMainBoard>
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
      <MainBoard>{board}</MainBoard>
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
