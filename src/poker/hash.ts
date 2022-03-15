import * as tables from "./tables";

export const quinary = (q: number[], numCards: number) => {
  const length = q.length;
  let sum = 0;
  let k = numCards;

  for (const [i, v] of q.entries()) {
    sum += tables.dp[v][length - i - 1][k];

    k -= v;

    if (k <= 0) {
      break;
    }
  }

  return sum;
};

export const binary = (b: number, numCards: number): number => {
  const length = 15;
  let sum = 0;
  let k = numCards;

  for (let i = 0; i < length; i++) {
    if (b & (1 << i)) {
      if (length - i - 1 >= k) {
        sum += tables.choose[length - i - 1][k];
      }

      k--;

      if (k <= 0) {
        break;
      }
    }
  }

  return sum;
};
