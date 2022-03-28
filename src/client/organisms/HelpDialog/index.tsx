import React, { useState } from "react";
import styled from "@emotion/styled";
import { Divider, IconButton, Typography } from "@mui/material";
import { Help } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Dialog } from "../../molecules/Dialog";
import { Hands, Props as HandsProps } from "../../molecules/Hands";
import { Guesses } from "../../molecules/Guesses";
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
    name: "other1",
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
    name: "other2",
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
    name: "other3",
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
      return light ? "♣" : "♧";
    case "D":
      return light ? "♦" : "♢";
    case "H":
      return light ? "♥" : "♡";
    case "S":
      return light ? "♠" : "♤";
  }
};

type SpotProps = {
  name: string;
  width: number;
};

export const Spot: React.FC<SpotProps> = ({ name, width }) => (
  <SpotContainer width={width}>
    <SpotDivider sx={{ borderBottomWidth: "medium" }} />
    <SpotName>{name}</SpotName>
  </SpotContainer>
);

const SpotContainer = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  margin: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
              <StyledHands key={p.name} {...p} small />
            ))}
          </PlayerList>
          <Explanation>{examples.handValue.description}</Explanation>
        </Section>
        <SubsectionTitle margin={0}>
          {examples.communityCards.title}
        </SubsectionTitle>
        <Section>
          <StyledGuesses guesses={correctFlop} row={0} explanationMode />
          <Spots>
            <Spot name="flop" width={136} />
            <Spot name="turn" width={40} />
            <Spot name="river" width={40} />
          </Spots>
          {examples.communityCards.correct}
          <Guesses guesses={nonOrderedFlop} row={0} explanationMode />
          {examples.communityCards.flop}
          <Guesses guesses={partial} row={0} explanationMode />
          {examples.communityCards.partial}
          <Guesses guesses={partialRank} row={0} explanationMode />
          {examples.communityCards.partialRank}
          <Guesses guesses={absent} row={0} explanationMode />
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
            <Link
              href="https://twitter.com/pocketberserker"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pocketberserker
            </Link>
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

const Link = styled.a`
  text-decoration: underline;
`;

export const HelpDialogEn: React.FC = () => {
  const theme = useTheme();
  const light = theme.palette.mode === "light";

  return (
    <HelpDialog
      title="How to play"
      introduction={
        <>
          <Explanation>
            Guess the community cards in six tries so that you win.
          </Explanation>
          <Explanation>
            Each guess must be "flop", "turn" and "river" cards. Hit the enter
            button to submit.
          </Explanation>
          <Explanation>
            After each guess, the color of the tiles will change to show how
            close your guess was to the cards.
          </Explanation>
        </>
      }
      examples={{
        title: "Examples",
        handValue: {
          title: "Hand Value",
          description: `Your hand value is greater than or equal to "Straight" when the
opponent hand values are "One Pair", "One Pair" and "Straight".`,
        },
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
              the "flop" spots are in no particular order.
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
              But the other "T" suit card is in them.
            </Explanation>
          ),
          absent: (
            <Explanation>
              The card "9{suitLabel("D", light)}" is not in the community cards
              in any spot.
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
          <Link
            href="https://www.nytimes.com/games/wordle/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wordle
          </Link>
          .
        </Explanation>
      }
    />
  );
};
