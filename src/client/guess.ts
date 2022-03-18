import { Card, equalsCard } from "../poker";

export type Guess = Blank | Entered | Partial | PartialRank | Absent | Correct;

export type Blank = {
  kind: "blank";
};

export type Entered = {
  kind: "entered";
  card: Card;
};

export type Partial = {
  kind: "partial";
  card: Card;
};

export type PartialRank = {
  kind: "partial-rank";
  card: Card;
};

export type Absent = {
  kind: "absent";
  card: Card;
};

export type Correct = {
  kind: "correct";
  card: Card;
};

export type Answers = {
  guesses: Guess[];
  corrects: Card[];
  partials: Card[];
  partialRanks: Card[];
  absents: Card[];
};

const checkCorrect = (common: Card[], target: Card, index: number): boolean => {
  // The flop cards are treated as correct if it is included flop range.
  if (index < 3) {
    return common.slice(0, 3).findIndex((c) => equalsCard(c, target)) !== -1;
  }
  return equalsCard(target, common[index]);
};

export const matchTheAnswers = (
  input: Guess[],
  common: Card[]
): Answers | string => {
  const guesses: Guess[] = [];
  const absents: Card[] = [];
  const corrects: Card[] = [];
  const partials: Card[] = [];
  const partialRankCandidates: [number, Card][] = [];

  for (const [i, s] of input.entries()) {
    if (s.kind === "blank") {
      return "Not enough cards";
    } else if (s.kind !== "entered") {
      return "Already checked (bug?)";
    }

    let kind: "correct" | "absent" | "partial" = "absent";
    if (checkCorrect(common, s.card, i)) {
      kind = "correct";
      corrects.push(s.card);
    } else if (common.find((c) => equalsCard(c, s.card))) {
      kind = "partial";
      partials.push(s.card);
    } else if (common.find((c) => c.rank === s.card.rank)) {
      partialRankCandidates.push([i, s.card]);
    } else {
      absents.push(s.card);
    }

    guesses.push({
      kind,
      card: s.card,
    });
  }

  const partialRanks: Card[] = [];
  for (const [index, card] of partialRankCandidates) {
    const correctCount = corrects.filter((c) => c.rank === card.rank).length;
    const inputCount = input.filter(
      (s) => s.kind === "entered" && s.card.rank === card.rank
    ).length;
    const commonCount = common.filter((c) => c.rank === card.rank).length;
    if (correctCount === 0 || inputCount <= commonCount) {
      partialRanks.push(card);
      guesses[index] = {
        kind: "partial-rank",
        card,
      };
    } else {
      absents.push(card);
    }
  }

  return {
    guesses,
    corrects,
    absents,
    partials,
    partialRanks,
  };
};

export type Diff = {
  corrects: Card[];
  partials: Card[];
  partialRanks: Card[];
  absents: Card[];
};

export const collectDiff = (prev: Diff, current: Answers): Diff => {
  const corrects = [
    ...prev.corrects,
    ...current.corrects.filter(
      (c) => prev.corrects.findIndex((p) => equalsCard(p, c)) === -1
    ),
  ];
  return {
    absents: [...prev.absents, ...current.absents],
    corrects,
    partials: [
      ...prev.partials,
      ...current.corrects.filter(
        (c) => prev.partials.findIndex((p) => equalsCard(p, c)) === -1
      ),
    ].filter((p) => corrects.findIndex((c) => equalsCard(c, p)) === -1),
    partialRanks: current.partialRanks,
  };
};
