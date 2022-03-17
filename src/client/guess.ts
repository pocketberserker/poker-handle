import { Card } from "../poker";

export type Guess = Blank | Entered | Partial | PartialRank | Absent | Correct;

export type Blank = {
  kind: "blank";
};

export type Entered = {
  kind: "entered";
  card: Card;
};

export type Partial = {
  kind: "partial";
  card: Card;
};

export type PartialRank = {
  kind: "partial-rank";
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
