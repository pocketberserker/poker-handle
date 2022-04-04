import {
  Answers,
  Diff,
  Guess,
  matchTheAnswers,
  collectDiff,
} from "../../src/client/guess";
import { Card, equalsCard, parse, ranks, suits } from "../../src/poker";
import { generate } from "../../src/client/generator";

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
      "8H QC 5H 5C TC", // 5 -> partial 1, partial-rank 1
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
            kind: "absent",
          },
          {
            card: {
              rank: "5",
              suit: "C",
            },
            kind: "partial",
          },
          {
            card: {
              rank: "T",
              suit: "C",
            },
            kind: "partial",
          },
        ] as Guess[],
        absents: [
          {
            rank: "5",
            suit: "H",
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
        ] as Card[],
        partialRanks: [],
        partials: [
          {
            rank: "5",
            suit: "C",
          },
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
    (input: string, common: string, expected: Answers) => {
      expect(
        matchTheAnswers(
          input.split(" ").map((c) => ({ kind: "entered", card: parse(c) })),
          common.split(" ").map((c) => parse(c)),
          () => ""
        )
      ).toEqual(expected);
    }
  );
});

describe("Diff", () => {
  test.each([
    [
      "AH QC TC 7S 5C",
      "8H QC TC 7S 5C",
      {
        absents: [
          {
            rank: "A",
            suit: "H",
          },
          {
            rank: "A",
            suit: "C",
          },
          {
            rank: "A",
            suit: "D",
          },
          {
            rank: "A",
            suit: "S",
          },
        ] as Card[],
        corrects: [
          {
            rank: "Q",
            suit: "C",
          },
          {
            rank: "T",
            suit: "C",
          },
          {
            rank: "7",
            suit: "S",
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
      "2C 3C 4C 5C 6C",
      "8H QC TC 8S 5C",
      {
        absents: [
          {
            rank: "2",
            suit: "C",
          },
          {
            rank: "3",
            suit: "C",
          },
          {
            rank: "4",
            suit: "C",
          },
          {
            rank: "6",
            suit: "C",
          },
          {
            rank: "2",
            suit: "D",
          },
          {
            rank: "2",
            suit: "H",
          },
          {
            rank: "2",
            suit: "S",
          },
          {
            rank: "3",
            suit: "D",
          },
          {
            rank: "3",
            suit: "H",
          },
          {
            rank: "3",
            suit: "S",
          },
          {
            rank: "4",
            suit: "D",
          },
          {
            rank: "4",
            suit: "H",
          },
          {
            rank: "4",
            suit: "S",
          },
          {
            rank: "6",
            suit: "D",
          },
          {
            rank: "6",
            suit: "H",
          },
          {
            rank: "6",
            suit: "S",
          },
        ] as Card[],
        corrects: [] as Card[],
        partialRanks: [],
        partials: [
          {
            rank: "5",
            suit: "C",
          },
        ] as Card[],
      },
    ],
  ])("correct: %s, %s", (input: string, common: string, expected: Diff) => {
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
          common.split(" ").map((c) => parse(c)),
          () => ""
        ) as Answers,
        [],
        []
      )
    ).toEqual(expected);
  });

  it("hand card ranks are not applicable to add absent", () => {
    expect(
      collectDiff(
        {
          absents: ["8C", "9C"].map((c) => parse(c)),
          corrects: [],
          partialRanks: [],
          partials: [],
        },
        matchTheAnswers(
          "2C 3C 4C 5C 6C"
            .split(" ")
            .map((c) => ({ kind: "entered", card: parse(c) })),
          "2C 3C 4C 5C 7C".split(" ").map((c) => parse(c)),
          () => ""
        ) as Answers,
        [],
        ["8C", "9C"].map((c) => parse(c))
      )
    ).toEqual({
      absents: [
        {
          rank: "8",
          suit: "C",
        },
        {
          rank: "9",
          suit: "C",
        },
        {
          rank: "6",
          suit: "C",
        },
        {
          rank: "6",
          suit: "D",
        },
        {
          rank: "6",
          suit: "H",
        },
        {
          rank: "6",
          suit: "S",
        },
        {
          rank: "8",
          suit: "C",
        },
        {
          rank: "9",
          suit: "C",
        },
      ],
      corrects: [
        {
          rank: "2",
          suit: "C",
        },
        {
          rank: "3",
          suit: "C",
        },
        {
          rank: "4",
          suit: "C",
        },
        {
          rank: "5",
          suit: "C",
        },
      ],
      partials: [],
      partialRanks: [],
    });
  });

  it(`fix bug: selectable card is nothing(seed: "2022-03-30")`, () => {
    const inputs: Guess[][] = [
      "AC 2D 3C 4C 7C",
      "AH TD TH 2D TS",
      "9S JS QS KS KH",
      "AH AS 2S KH 2D",
      "6S 6D 8D 5H 8h",
    ].map((s) =>
      s.split(" ").map((c) => ({ kind: "entered", card: parse(c) }))
    );
    const board = generate("2022-03-30", 3);
    const hands = [...board.player, ...board.opponents.flat()];

    let diff: Diff = {
      absents: [...hands],
      corrects: [],
      partialRanks: [],
      partials: [],
    };
    for (const input of inputs) {
      diff = collectDiff(
        diff,
        matchTheAnswers(input, board.common, () => "") as Answers,
        board.common,
        hands
      );
    }

    const all = ranks
      .map((r) =>
        suits.map(
          (s) =>
            ({
              rank: r,
              suit: s,
            } as Card)
        )
      )
      .flat();
    const remaining: Card[] = [];

    for (const card of all) {
      if (
        diff.absents.findIndex((a) => equalsCard(a, card)) === -1 &&
        diff.partials.findIndex((p) => equalsCard(p, card)) === -1 &&
        diff.partialRanks.findIndex((p) => equalsCard(p, card)) === -1
      ) {
        remaining.push(card);
      }
    }
    expect(
      board.common
        .filter((c) => board.player.findIndex((h) => equalsCard(c, h)) !== -1)
        .every((e) => remaining.findIndex((c) => equalsCard(e, c)) !== -1)
    ).toBeTruthy();
  });
});
