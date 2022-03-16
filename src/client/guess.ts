import { Card } from "../poker";

export type Guess = Blank | Entered | PartialMatch | Absent | Correct;

export type Blank = {
  kind: "blank";
};

export type Entered = {
  kind: "entered";
  card: Card;
};

export type PartialMatch = {
  kind: "partial-match";
  card: Card;
};

export type Absent = {
  kind: "absent";
  card: Card;
};

export type Correct = {
  kind: "correct";
  card: Card;
};
