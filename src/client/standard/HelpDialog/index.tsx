import React, { useState } from "react";
import styled from "@emotion/styled";
import { Divider, IconButton, Typography } from "@mui/material";
import { Help } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Dialog } from "../../molecules/Dialog";
import { Hands, Props as HandsProps } from "../../molecules/Hands";
import { Guesses } from "../../molecules/Guesses";
import { ExternalLink } from "../../atoms/ExternalLink";
import { Guess } from "../../guess";
import { Suit } from "../../../poker";

const players: HandsProps[] = [
  {
    name: "you",
    cards: [
      {
        rank: "4",
        suit: "S",
      },
      {
        rank: "8",
        suit: "S",
      },
    ],
  },
  {
    name: "1",
    cards: [
      {
        rank: "5",
        suit: "D",
      },
      {
        rank: "Q",
        suit: "C",
      },
    ],
    category: "One Pair",
  },
  {
    name: "2",
    cards: [
      {
        rank: "3",
        suit: "D",
      },
      {
        rank: "4",
        suit: "H",
      },
    ],
    category: "One Pair",
  },
  {
    name: "3",
    cards: [
      {
        rank: "A",
        suit: "H",
      },
      {
        rank: "5",
        suit: "H",
      },
    ],
    category: "Straight",
  },
];

const correctFlop: Guess[] = [
  {
    kind: "correct",
    card: {
      rank: "T",
      suit: "S",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "2",
      suit: "C",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "5",
      suit: "D",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "8",
      suit: "C",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "9",
      suit: "D",
    },
  },
];

const nonOrderedFlop: Guess[] = [
  {
    kind: "entered",
    card: {
      rank: "2",
      suit: "C",
    },
  },
  {
    kind: "correct",
    card: {
      rank: "T",
      suit: "S",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "5",
      suit: "D",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "8",
      suit: "C",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "9",
      suit: "D",
    },
  },
];

const partial: Guess[] = [
  {
    kind: "entered",
    card: {
      rank: "2",
      suit: "C",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "5",
      suit: "D",
    },
  },
  {
    kind: "partial",
    card: {
      rank: "Q",
      suit: "S",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "8",
      suit: "C",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "9",
      suit: "D",
    },
  },
];

const partialRank: Guess[] = [
  {
    kind: "entered",
    card: {
      rank: "2",
      suit: "C",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "5",
      suit: "D",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "8",
      suit: "C",
    },
  },
  {
    kind: "partial-rank",
    card: {
      rank: "T",
      suit: "H",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "9",
      suit: "D",
    },
  },
];

const absent: Guess[] = [
  {
    kind: "entered",
    card: {
      rank: "9",
      suit: "S",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "2",
      suit: "C",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "5",
      suit: "D",
    },
  },
  {
    kind: "entered",
    card: {
      rank: "8",
      suit: "C",
    },
  },
  {
    kind: "absent",
    card: {
      rank: "9",
      suit: "D",
    },
  },
];

const suitLabel = (suit: Suit, light: boolean): string => {
  switch (suit) {
    case "C":
      return light ? "???" : "???";
    case "D":
      return light ? "???" : "???";
    case "H":
      return light ? "???" : "???";
    case "S":
      return light ? "???" : "???";
  }
};

type SpotProps = {
  name: string;
  width: number;
};

const Spot: React.FC<SpotProps> = ({ name, width }) => (
  <SpotContainer width={width}>
    <SpotDivider sx={{ borderBottomWidth: "medium" }} />
    <SpotName>{name}</SpotName>
  </SpotContainer>
);

const SpotContainer = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 45px;
  margin: 0 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpotName = styled.span`
  font-weight: bold;
`;

const SpotDivider = styled(Divider)`
  width: 100%;
  border-color: ${({ theme }) => theme.palette.text.primary};
`;

type HelpDialogProps = {
  title: string;
  introduction: React.ReactNode;
  examples: {
    title: string;
    handValue: {
      title: string;
      description: string;
    };
    flop: string;
    turn: string;
    river: string;
    communityCards: {
      title: string;
      correct: React.ReactNode;
      flop: React.ReactNode;
      partial: React.ReactNode;
      partialRank: React.ReactNode;
      absent: React.ReactNode;
    };
  };
  available: React.ReactNode;
  inspired: React.ReactNode;
};

export const HelpDialog: React.FC<HelpDialogProps> = ({
  title,
  introduction,
  examples,
  available,
  inspired,
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <HelpIcon />
      </IconButton>
      <Dialog open={open} close={handleClose} fullScreen>
        <Title variant="h5">{title}</Title>
        <ContentDivider margin={10} />
        <Section>{introduction}</Section>
        <ContentDivider margin={0} />
        <SectionTitle>{examples.title}</SectionTitle>
        <SubsectionTitle margin={5}>{examples.handValue.title}</SubsectionTitle>
        <Section>
          <PlayerList>
            {players.map((p) => (
              <StyledHands
                key={p.name}
                {...p}
                name={
                  p.name === "you"
                    ? t("game.you")
                    : `${t("game.opponent")}${p.name}`
                }
                small
              />
            ))}
          </PlayerList>
          <Explanation>{examples.handValue.description}</Explanation>
        </Section>
        <SubsectionTitle margin={0}>
          {examples.communityCards.title}
        </SubsectionTitle>
        <Section>
          <StyledGuesses guesses={correctFlop} row={0} immediately />
          <Spots>
            <Spot name={examples.flop} width={136} />
            <Spot name={examples.turn} width={40} />
            <Spot name={examples.river} width={40} />
          </Spots>
          {examples.communityCards.correct}
          <Guesses guesses={nonOrderedFlop} row={0} immediately />
          {examples.communityCards.flop}
          <Guesses guesses={partial} row={0} immediately />
          {examples.communityCards.partial}
          <Guesses guesses={partialRank} row={0} immediately />
          {examples.communityCards.partialRank}
          <Guesses guesses={absent} row={0} immediately />
          {examples.communityCards.absent}
        </Section>
        <ContentDivider margin={0} />
        <Section>{available}</Section>
        <ContentDivider margin={0} />
        <Section>{inspired}</Section>
        <ContentDivider margin={0} />
        <Section>
          <Explanation>
            Created by{" "}
            <ExternalLink href="https://twitter.com/pocketberserker">
              @pocketberserker
            </ExternalLink>
            {" ( "}
            <ExternalLink href="https://github.com/pocketberserker/poker-handle">
              source code
            </ExternalLink>
            {" ) "}
          </Explanation>
        </Section>
      </Dialog>
    </div>
  );
};

const HelpIcon = styled(Help)``;

const Title = styled(Typography)`
  margin-top: 5px;
`;

const ContentDivider = styled(Divider)<{ margin: number }>`
  width: 100%;
  margin-top: ${({ margin }) => margin}px;
`;

const Section = styled.section`
  margin: 0 10px;
`;

const SectionTitle = styled(Typography)`
  margin: 5px auto 0 10px;
  font-weight: 1000;
`;

const SubsectionTitle = styled(Typography)<{ margin: number }>`
  margin: ${({ margin }) => margin}px auto 0 10px;
  font-weight: 700;
  font-size: 14px;
`;

const PokerHandle = styled.span`
  font-weight: 700;
`;

const Explanation = styled.p`
  width: 350px;
`;

const PlayerList = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHands = styled(Hands)`
  margin: 0 5px;
`;

const StyledGuesses = styled(Guesses)`
  margin-top: 10px;
`;

const Spots = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wordle: React.FC = () => (
  <ExternalLink href="https://www.nytimes.com/games/wordle/index.html">
    Wordle
  </ExternalLink>
);

const Worldle: React.FC = () => (
  <ExternalLink href="https://worldle.teuteuf.fr/">Worldle</ExternalLink>
);

export const HelpDialogEn: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const light = theme.palette.mode === "light";

  return (
    <HelpDialog
      title="How to play"
      introduction={
        <>
          <Explanation>
            Guess the community cards in six or less tries.
          </Explanation>
          <Explanation>
            The value of your opponents hands for the correct answer is shown,
            and the answer is always so that you have the winning hand of the
            table.
          </Explanation>
          <Explanation>
            For each guess, select the respective "{t("poker.flop")}", "
            {t("poker.turn")}" and "{t("poker.river")}" cards. Hit the enter
            button to submit.
          </Explanation>
          <Explanation>
            After each guess, the color of the tiles will change to show you how
            close to the answer your guess was.
          </Explanation>
        </>
      }
      examples={{
        title: "Examples",
        handValue: {
          title: "Hand Value",
          description: `Your hand value is greater than or equal to "Straight" when the opponents hand value are "One Pair", "One Pair" and "Straight".`,
        },
        flop: t("poker.flop"),
        turn: t("poker.turn"),
        river: t("poker.river"),
        communityCards: {
          title: "Community Cards",
          correct: (
            <Explanation>
              The card "T{suitLabel("S", light)}" is in the community cards and
              in the correct spot.
            </Explanation>
          ),
          flop: (
            <Explanation>
              the "{t("poker.flop")}" spots are in no particular order.
            </Explanation>
          ),
          partial: (
            <Explanation>
              The card "Q{suitLabel("S", light)}" is in the community cards but
              in the wrong spot.
            </Explanation>
          ),
          partialRank: (
            <Explanation>
              The card "T{suitLabel("H", light)}" is not in the community cards.
              But a "T" card of another suit is in them.
            </Explanation>
          ),
          absent: (
            <Explanation>
              Neither the card "9{suitLabel("D", light)}" or any "9" card are in
              the community cards (in any spot).
            </Explanation>
          ),
        },
      }}
      available={
        <Explanation>
          A new <PokerHandle>Poker Handle</PokerHandle> will be available every
          day!
        </Explanation>
      }
      inspired={
        <Explanation>
          <PokerHandle>Poker Handle</PokerHandle> has been heavily inspired by{" "}
          <Wordle /> and <Worldle />.
        </Explanation>
      }
    />
  );
};

export const HelpDialogJa: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const light = theme.palette.mode === "light";

  return (
    <HelpDialog
      title="???????????????"
      introduction={
        <>
          <Explanation>
            ?????????????????????????????????6????????????????????????????????????
          </Explanation>
          <Explanation>
            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Explanation>
          <Explanation>
            "{t("poker.flop")}"???"{t("poker.turn")}"???"{t("poker.river")}
            "??????????????????????????????????????? ????????????????????????????????????????????????????????????
          </Explanation>
          <Explanation>
            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Explanation>
        </>
      }
      examples={{
        title: "???",
        handValue: {
          title: "?????????",
          description: `???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`,
        },
        flop: t("poker.flop"),
        turn: t("poker.turn"),
        river: t("poker.river"),
        communityCards: {
          title: "??????????????????????????????",
          correct: (
            <Explanation>
              "T{suitLabel("S", light)}
              "???????????????????????????????????????????????????????????????
            </Explanation>
          ),
          flop: (
            <Explanation>"{t("poker.flop")}"??????????????????????????????</Explanation>
          ),
          partial: (
            <Explanation>
              "Q{suitLabel("S", light)}
              "??????????????????????????????????????????????????????????????????????????????
            </Explanation>
          ),
          partialRank: (
            <Explanation>
              "T{suitLabel("H", light)}"?????????????????????????????????????????????????????????
              ???????????????????????????"T"??????????????????????????????????????????
            </Explanation>
          ),
          absent: (
            <Explanation>
              "9{suitLabel("D", light)}
              "?????????"9"?????????????????????????????????????????????????????????????????????
            </Explanation>
          ),
        },
      }}
      available={
        <Explanation>
          <PokerHandle>Poker Handle</PokerHandle>
          ????????????????????????????????????????????????
        </Explanation>
      }
      inspired={
        <Explanation>
          <PokerHandle>Poker Handle</PokerHandle>???<Wordle />???<Worldle />
          ???????????????????????????????????????
        </Explanation>
      }
    />
  );
};
