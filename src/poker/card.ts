import * as hash from "./hash";
import * as tables from "./tables";

export const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
  "A",
] as const;

export type Rank = typeof ranks[number];

const rank = Object.fromEntries(ranks.map((r, i) => [r, i]));
const reverseRank = Object.fromEntries(ranks.map((r, i) => [`${i}`, r]));

export const suits = ["C", "D", "H", "S"] as const;

export type Suit = typeof suits[number];

const suit = Object.fromEntries(suits.map((r, i) => [r, i]));
const reverseSuit = Object.fromEntries(suits.map((r, i) => [`${i}`, r]));

export const numberOfCards = ranks.length * suits.length;

export type Card = {
  rank: Rank;
  suit: Suit;
};

export const cardToId = (card: Card): number =>
  rank[card.rank] * 4 + suit[card.suit];

export const idToCard = (id: number): Card => {
  if (id < 0 || id > numberOfCards - 1) {
    throw new Error(`Id(${id}) is not a card id`);
  }

  return {
    rank: reverseRank[`${Math.floor(id / 4)}`],
    suit: reverseSuit[`${id % 4}`],
  };
};

export const parse = (str: string): Card => {
  if (str.length === 2) {
    const [r, s] = str.split("").map((c) => c.toUpperCase());

    if (rank[r] !== undefined && suit[s] !== undefined) {
      return {
        rank: r,
        suit: s,
      } as Card;
    }
  }

  throw new Error("Unexpected Card input");
};

export const stringify = (card: Card): string => `${card.rank}${card.suit}`;

const minCards = 5;
const maxCards = 7;
const noFlushes: { [key: number]: number[] } = {
  5: tables.noFlush5,
  6: tables.noFlush6,
  7: tables.noFlush7,
};

export const evaluate = (cards: Card[]): number => {
  const ids = cards.map((c) => cardToId(c));
  const size = ids.length;
  const noFlush = noFlushes[size];

  if (size < minCards || size > maxCards || !noFlush) {
    throw new Error(
      `The number of cards must be between ${minCards} and ${maxCards}.`
    );
  }

  let suitHash = 0;
  for (const card of ids) {
    suitHash += tables.suitbitById[card];
  }

  const flushSuit = tables.suits[suitHash];

  if (flushSuit) {
    const suitBinary = [0, 0, 0, 0];

    for (const card of ids) {
      suitBinary[card & 0x03] |= tables.binariesById[card];
    }

    return tables.flush[suitBinary[flushSuit - 1]];
  }

  const quinary = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (const card of ids) {
    quinary[card >> 2]++;
  }

  return noFlush[hash.quinary(quinary, size)];
};

export const equalsCard = (a: Card, b: Card): boolean =>
  a.rank === b.rank && a.suit === b.suit;
