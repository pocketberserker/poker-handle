import * as poker from "../../src/poker";

describe("Card", () => {
  test.each([
    ["2", "C", 0],
    ["2", "D", 1],
    ["2", "H", 2],
    ["2", "S", 3],
    ["T", "C", 32],
    ["J", "C", 36],
    ["Q", "C", 40],
    ["K", "C", 44],
    ["A", "C", 48],
  ] as [poker.Rank, poker.Suit, number][])(
    "to id(%s%s, %i)",
    (rank: poker.Rank, suit: poker.Suit, id: number) => {
      expect(
        poker.cardToId({
          rank,
          suit,
        })
      ).toBe(id);
    }
  );

  test.each([
    ["2C", 0],
    ["2D", 1],
    ["2H", 2],
    ["2S", 3],
    ["TC", 32],
    ["JC", 36],
    ["QC", 40],
    ["KC", 44],
    ["AC", 48],
  ])("parse (%s)", (input, id: number) => {
    expect(poker.cardToId(poker.parse(input))).toBe(id);
  });

  test.each([
    [0, "2", "C"],
    [1, "2", "D"],
    [2, "2", "H"],
    [3, "2", "S"],
    [32, "T", "C"],
    [36, "J", "C"],
    [40, "Q", "C"],
    [44, "K", "C"],
    [48, "A", "C"],
  ] as [number, poker.Rank, poker.Suit][])(
    "from id(%i, %s%s)",
    (id: number, rank: poker.Rank, suit: poker.Suit) => {
      const card = poker.idToCard(id);
      expect(card.rank).toBe(rank);
      expect(card.suit).toBe(suit);
    }
  );
});
