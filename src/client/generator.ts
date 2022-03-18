import * as seedrandom from "seedrandom";
import * as poker from "../poker";

export type Board = {
  player: [poker.Card, poker.Card];
  opponent: [poker.Card, poker.Card];
  common: poker.Card[];
};

const genCard = (arng: seedrandom.PRNG, ignore: poker.Card[]): poker.Card => {
  const id = Math.floor(arng() * poker.numberOfCards);
  const card = poker.idToCard(id);
  if (ignore.find((c) => c.rank === card.rank && c.suit === card.suit)) {
    return genCard(arng, ignore);
  }
  return card;
};

const tryCount = 5;
const tryGenerate = (arng: seedrandom.PRNG): Board | null => {
  const ignore: poker.Card[] = [];

  const opponentFirst = genCard(arng, ignore);
  ignore.push(opponentFirst);
  const opponentSecond = genCard(arng, ignore);
  ignore.push(opponentSecond);
  const opponent: [poker.Card, poker.Card] = [opponentFirst, opponentSecond];

  const common: poker.Card[] = [];
  for (let i = 0; i < 5; i++) {
    const c = genCard(arng, ignore);
    common.push(c);
    ignore.push(c);
  }

  const opponentRank = poker.evaluate([...common, ...opponent]);
  const opponentCategory = poker.getRankCategory(opponentRank);

  if (
    opponent[0].rank === opponent[1].rank &&
    (opponentCategory === "One Pair" || opponentCategory === "Two Pair")
  ) {
    return null;
  }

  let player: [poker.Card, poker.Card] | null = null;
  for (let i = 0; i < tryCount; i++) {
    try {
      const remaining = [...ignore];
      const first = genCard(arng, remaining);
      remaining.push(first);
      const second = genCard(arng, remaining);
      remaining.push(second);
      const p: [poker.Card, poker.Card] = [first, second];

      const playerRank = poker.evaluate([...common, ...p]);
      if (
        playerRank >= opponentRank ||
        (opponentCategory === "High Card" &&
          poker.getRankCategory(playerRank) === "High Card")
      ) {
        continue;
      }
      player = p;
      break;
    } catch (e) {}
  }

  if (player) {
    return {
      player,
      opponent,
      common,
    };
  }

  return null;
};

export const generate = (seed: string): Board => {
  const arng = seedrandom.alea(seed);

  let game: Board | null = null;
  while (game === null) {
    game = tryGenerate(arng);
  }

  return game;
};
