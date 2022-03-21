import * as seedrandom from "seedrandom";
import * as poker from "../poker";
import { commonCardCounts } from "./constants/meta";

export type Board = {
  player: [poker.Card, poker.Card];
  opponents: [poker.Card, poker.Card][];
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

const genOpponentHands = (
  arng: seedrandom.PRNG,
  ignore: poker.Card[]
): [poker.Card, poker.Card] => {
  const first = genCard(arng, ignore);
  ignore.push(first);
  const second = genCard(arng, ignore);
  ignore.push(second);
  return [first, second];
};

const tryCount = 5;
const tryGenerate = (
  arng: seedrandom.PRNG,
  opponentCount: 1 | 3
): Board | null => {
  const ignore: poker.Card[] = [];
  const opponents = [...Array(opponentCount).keys()].map(() =>
    genOpponentHands(arng, ignore)
  );

  const common: poker.Card[] = [];
  for (let i = 0; i < commonCardCounts; i++) {
    const c = genCard(arng, ignore);
    common.push(c);
    ignore.push(c);
  }

  const opponentRanks = opponents.map((o) => poker.evaluate([...common, ...o]));

  if (opponents.length === 1 && opponentRanks.length === 1) {
    const [hand0, hand1] = opponents[0];
    const opponentCategory = poker.getRankCategory(opponentRanks[0]);

    if (
      hand0.rank === hand1.rank &&
      (opponentCategory === "One Pair" || opponentCategory === "Two Pair")
    ) {
      return null;
    }
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
      if (opponentRanks.every((r) => playerRank < r)) {
        player = p;
        break;
      }
    } catch (e) {}
  }

  if (player) {
    return {
      player,
      opponents,
      common,
    };
  }

  return null;
};

export const generate = (seed: string, opponents: 1 | 3): Board => {
  const arng = seedrandom.alea(seed);

  let game: Board | null = null;
  while (game === null) {
    game = tryGenerate(arng, opponents);
  }

  return game;
};
