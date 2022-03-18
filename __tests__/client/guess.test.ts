import {
  Answers,
  Diff,
  Guess,
  matchTheAnswers,
  collectDiff,
} from "../../src/client/guess";
import { Card, parse } from "../../src/poker";

describe("Answers", () => {
  test.each([
    [
      "8H QC TC 5S 5C", // 5 -> 2
      "8H QC TC 7S 5C", // 5 -> 1
      {
        guesses: [
          {
            card: {
              rank: "8",
              suit: "H",
            },
            kind: "correct",
          },
          {
            card: {
              rank: "Q",
              suit: "C",
            },
            kind: "correct",
          },
          {
            card: {
              rank: "T",
              suit: "C",
            },
            kind: "correct",
          },
          {
            card: {
              rank: "5",
              suit: "S",
            },
            kind: "absent",
          },
          {
            card: {
              rank: "5",
              suit: "C",
            },
            kind: "correct",
          },
        ] as Guess[],
        absents: [
          {
            rank: "5",
            suit: "S",
          },
        ] as Card[],
        corrects: [
          {
            rank: "8",
            suit: "H",
          },
          {
            rank: "Q",
            suit: "C",
          },
          {
            rank: "T",
            suit: "C",
          },
          {
            rank: "5",
            suit: "C",
          },
        ] as Card[],
        partialRanks: [],
        partials: [],
      },
    ],
    [
      "8H QC 5H 5S TC", // 5 -> 2
      "8H QC TC 7S 5C", // 5 -> 1
      {
        guesses: [
          {
            card: {
              rank: "8",
              suit: "H",
            },
            kind: "correct",
          },
          {
            card: {
              rank: "Q",
              suit: "C",
            },
            kind: "correct",
          },
          {
            card: {
              rank: "5",
              suit: "H",
            },
            kind: "partial-rank",
          },
          {
            card: {
              rank: "5",
              suit: "S",
            },
            kind: "partial-rank",
          },
          {
            card: {
              rank: "T",
              suit: "C",
            },
            kind: "partial",
          },
        ] as Guess[],
        absents: [],
        corrects: [
          {
            rank: "8",
            suit: "H",
          },
          {
            rank: "Q",
            suit: "C",
          },
        ] as Card[],
        partialRanks: [
          {
            rank: "5",
            suit: "H",
          },
          {
            rank: "5",
            suit: "S",
          },
        ] as Card[],
        partials: [
          {
            rank: "T",
            suit: "C",
          },
        ] as Card[],
      },
    ],
    [
      "8H QC 8D AS 8C", // 8 -> 3
      "8H QC TC 8S 8C", // 8 -> 3
      {
        guesses: [
          {
            card: {
              rank: "8",
              suit: "H",
            },
            kind: "correct",
          },
          {
            card: {
              rank: "Q",
              suit: "C",
            },
            kind: "correct",
          },
          {
            card: {
              rank: "8",
              suit: "D",
            },
            kind: "partial-rank",
          },
          {
            card: {
              rank: "A",
              suit: "S",
            },
            kind: "absent",
          },
          {
            card: {
              rank: "8",
              suit: "C",
            },
            kind: "correct",
          },
        ] as Guess[],
        absents: [
          {
            rank: "A",
            suit: "S",
          },
        ] as Card[],
        corrects: [
          {
            rank: "8",
            suit: "H",
          },
          {
            rank: "Q",
            suit: "C",
          },
          {
            rank: "8",
            suit: "C",
          },
        ] as Card[],
        partialRanks: [
          {
            rank: "8",
            suit: "D",
          },
        ] as Card[],
        partials: [],
      },
    ],
    [
      "8D QC AD AS AC", // 8 -> 1
      "8H QC TC 2S 8C", // 8 -> 2
      {
        guesses: [
          {
            card: {
              rank: "8",
              suit: "D",
            },
            kind: "partial-rank",
          },
          {
            card: {
              rank: "Q",
              suit: "C",
            },
            kind: "correct",
          },
          {
            card: {
              rank: "A",
              suit: "D",
            },
            kind: "absent",
          },
          {
            card: {
              rank: "A",
              suit: "S",
            },
            kind: "absent",
          },
          {
            card: {
              rank: "A",
              suit: "C",
            },
            kind: "absent",
          },
        ] as Guess[],
        absents: [
          {
            rank: "A",
            suit: "D",
          },
          {
            rank: "A",
            suit: "S",
          },
          {
            rank: "A",
            suit: "C",
          },
        ] as Card[],
        corrects: [
          {
            rank: "Q",
            suit: "C",
          },
        ] as Card[],
        partialRanks: [
          {
            rank: "8",
            suit: "D",
          },
        ] as Card[],
        partials: [],
      },
    ],
  ])(
    "match the answers: %s, %s",
    async (input: string, common: string, expected: Answers) => {
      expect(
        matchTheAnswers(
          input.split(" ").map((c) => ({ kind: "entered", card: parse(c) })),
          common.split(" ").map((c) => parse(c))
        )
      ).toEqual(expected);
    }
  );
});

describe("Diff", () => {
  test.each([
    [
      "8H QC TC 5S 5C",
      "8H QC TC 8S 5C",
      {
        absents: [
          {
            rank: "5",
            suit: "S",
          },
        ] as Card[],
        corrects: [
          {
            rank: "8",
            suit: "H",
          },
          {
            rank: "Q",
            suit: "C",
          },
          {
            rank: "T",
            suit: "C",
          },
          {
            rank: "5",
            suit: "C",
          },
        ] as Card[],
        partialRanks: [],
        partials: [],
      },
    ],
  ])(
    "correct: %s, %s",
    async (input: string, common: string, expected: Diff) => {
      expect(
        collectDiff(
          {
            absents: [],
            corrects: [],
            partialRanks: [],
            partials: [],
          },
          matchTheAnswers(
            input.split(" ").map((c) => ({ kind: "entered", card: parse(c) })),
            common.split(" ").map((c) => parse(c))
          ) as Answers
        )
      ).toEqual(expected);
    }
  );
});
