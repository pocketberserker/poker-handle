export type Category =
  | "Straight Flush"
  | "Four of a Kind"
  | "Full House"
  | "Flush"
  | "Straight"
  | "Three of a Kind"
  | "Two Pair"
  | "One Pair"
  | "High Card";

export const getRankCategory = (rank: number): Category => {
  // 1277 high card
  if (rank > 6185) {
    return "High Card";
  }
  // 2860 one pair
  if (rank > 3325) {
    return "One Pair";
  }
  // 858 two pair
  if (rank > 2467) {
    return "Two Pair";
  }
  // 858 three-kind
  if (rank > 1609) {
    return "Three of a Kind";
  }
  // 10 straights
  if (rank > 1599) {
    return "Straight";
  }
  // 1277 flushes
  if (rank > 322) {
    return "Flush";
  }
  // 156 full house
  if (rank > 166) {
    return "Full House";
  }
  // 156 four-kind
  if (rank > 10) {
    return "Four of a Kind";
  }
  // 10 straight-flushes
  return "Straight Flush";
};
