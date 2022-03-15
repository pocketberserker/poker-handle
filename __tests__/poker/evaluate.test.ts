import * as path from "path";
import * as fs from "fs/promises";
import * as poker from "../../src/poker";

describe("Card", () => {
  it("example", () => {
    const rank1 = poker.evaluate([
      {
        rank: "9",
        suit: "C",
      },
      {
        rank: "4",
        suit: "C",
      },
      {
        rank: "4",
        suit: "S",
      },
      {
        rank: "9",
        suit: "D",
      },
      {
        rank: "4",
        suit: "H",
      },
      {
        rank: "Q",
        suit: "C",
      },
      {
        rank: "6",
        suit: "C",
      },
    ]);
    const rank2 = poker.evaluate([
      {
        rank: "9",
        suit: "C",
      },
      {
        rank: "4",
        suit: "C",
      },
      {
        rank: "4",
        suit: "S",
      },
      {
        rank: "9",
        suit: "D",
      },
      {
        rank: "4",
        suit: "H",
      },
      {
        rank: "2",
        suit: "C",
      },
      {
        rank: "9",
        suit: "H",
      },
    ]);

    expect(rank1).toBe(292);
    expect(rank2).toBe(236);
  });

  test.each([5, 6, 7])("%i cards", async (i: number) => {
    const buf = await fs.readFile(path.join(__dirname, `${i}card.json`));
    const inputs: { [input: string]: number } = JSON.parse(
      buf.toString("utf-8")
    );

    for (const [input, expected] of Object.entries(inputs)) {
      expect(poker.evaluate(input.split(" ").map((s) => poker.parse(s)))).toBe(
        expected
      );
    }
  });
});
