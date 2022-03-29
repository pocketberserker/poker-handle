import addDays from "date-fns/addDays";
import isSameDay from "date-fns/isSameDay";
import * as guess from "./guess";
import { parseDate } from "./datetime";

export type Stats = {
  currentStreak: number;
  maxStreak: number;
  played: number;
  winRatio: number;
  distribution: Record<1 | 2 | 3 | 4 | 5 | 6, number>;
};

const isComplete = (guesses: guess.Guess[]) =>
  guesses.filter((guess) => guess.kind === "correct").length === guesses.length;

export const getStats = (): Stats => {
  const allGuesses = guess.loadFromLocalStorage();
  const allGuessesEntries = Object.entries(allGuesses);
  const played = allGuessesEntries.length;

  const distribution = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  let currentStreak = 0;
  let maxStreak = 0;
  let previousDate: Date | undefined;
  for (const [day, guesses] of allGuessesEntries) {
    const currentDate = parseDate(day);
    const winIndex = guesses.findIndex((guess) => isComplete(guess));
    const won = winIndex >= 0;
    if (won) {
      const tryCount = (winIndex + 1) as 1 | 2 | 3 | 4 | 5 | 6;
      distribution[tryCount]++;

      if (
        previousDate == null ||
        isSameDay(addDays(previousDate, 1), currentDate)
      ) {
        currentStreak++;
      } else {
        currentStreak = 1;
      }
    } else {
      currentStreak = 0;
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }
    previousDate = currentDate;
  }

  const winCount = Object.values(distribution).reduce(
    (total, tries) => total + tries
  );

  return {
    currentStreak: currentStreak,
    maxStreak: maxStreak,
    played,
    winRatio: winCount / (played || 1),
    distribution,
  };
};
