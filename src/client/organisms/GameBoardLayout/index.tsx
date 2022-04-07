import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { useMessage } from "../../hooks/MessageSnackbar";
import { useMobile } from "../../hooks/MediaQuery";
import { useAnimation } from "../../hooks/Animation";
import { Card } from "../../../poker";
import { Guess, Diff } from "../../guess";
import { InputPanel } from "../../organisms/InputPanel";
import { ResultDialog } from "../ResultDialog";
import { maxTrials } from "../../constants/meta";

type Props = {
  board: React.ReactNode;
  hashtag: string;
  guesses: Guess[][];
  diff: Diff;
  trials: number;
  finished: boolean;
  completed: boolean;
  debug: boolean;
  play: () => void;
  handleSelect: (card: Card) => void;
  handleBackspace: () => void;
  handleEnter: () => void;
  showCorrectAnswer: () => void;
  onFinish: () => void;
};

export const GameBoardLayout: React.FC<Props> = ({
  board,
  hashtag,
  guesses,
  diff,
  trials,
  finished,
  completed,
  debug,
  play,
  handleSelect,
  handleBackspace,
  handleEnter,
  showCorrectAnswer,
  onFinish,
}) => {
  const { isMobile } = useMobile();
  const { reversing } = useAnimation();
  const { showMessage } = useMessage();
  const { t } = useTranslation();

  const [openResultDialog, setOpenResultDialog] = useState(false);

  const handleCloseResultDialog = () => {
    setOpenResultDialog(false);
  };

  useEffect(() => {
    if (finished && reversing === false) {
      if (trials > maxTrials && completed === false) {
        showCorrectAnswer();
      } else {
        showMessage(t("congratulations"));
      }
      setOpenResultDialog(true);
      onFinish();
    }
  }, [finished, trials, completed, reversing]);

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
          hashtag={hashtag}
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
        hashtag={hashtag}
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
