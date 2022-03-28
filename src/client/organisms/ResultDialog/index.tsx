import React, { useState } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Countdown from "react-countdown";
import { Dialog } from "../../molecules/Dialog";
import { Button } from "../../atoms/Button";
import { ShareButton } from "../ShareButton";
import { Guess } from "../../guess";

// const Statistics: React.FC = () => {
//   return <div></div>;
// };

// const Distribution: React.FC = () => {
//   return <div></div>;
// };

type CountdownNextPokerProps = {
  play: () => void;
};

const CountdownNextPoker: React.FC<CountdownNextPokerProps> = ({ play }) => {
  const { t } = useTranslation();
  const [ended, setEnded] = useState(false);

  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );

  return (
    <CountdownContainer>
      <Typography variant="h5">{t("game.result.next")}</Typography>
      {ended ? (
        <PlayButton click={play}>{t("game.result.play")}</PlayButton>
      ) : (
        <StyledCountdown
          date={tomorrow}
          onComplete={() => setEnded(true)}
          daysInHours
        />
      )}
    </CountdownContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CountdownContainer = styled(Container)`
  margin-top: 10px;
`;

const PlayButton = styled(Button)`
  margin-top: 10px;
  width: 128px;
  height: 42px;
  font-weight: bold;
`;

const StyledCountdown = styled(Countdown)`
  margin-top: 10px;
  font-size: 28px;
`;

type ResultDialogProps = {
  guesses: Guess[][];
  open: boolean;
  play: () => void;
  close: () => void;
};

export const ResultDialog: React.FC<ResultDialogProps> = ({
  guesses,
  open,
  play,
  close,
}) => {
  return (
    <Dialog close={close} open={open}>
      <ResultDialogContainer>
        <CountdownNextPoker
          play={() => {
            play();
            close();
          }}
        />
        <StyledShareButton guesses={guesses} hashtag="#Poker_Handle" />
      </ResultDialogContainer>
    </Dialog>
  );
};

const ResultDialogContainer = styled(Container)`
  margin: 20px;
`;

const StyledShareButton = styled(ShareButton)`
  margin-top: 10px;
`;
