import format from "date-fns/format";
import * as poker from "../src/poker";
import { generate } from "../src/client/generator";

const main = () => {
  const board = generate(format(new Date(), "yyyy-MM-dd"), 3);

  const player = `${poker.stringify(board.player[0])} ${poker.stringify(
    board.player[1]
  )}`;
  const common = board.common.map((card) => poker.stringify(card)).join(" ");
  const opponents = board.opponents.map(
    ([hand0, hand1]) => `${poker.stringify(hand0)} ${poker.stringify(hand1)}`
  );
  console.log(`|  you  |     common     |${opponents
    .map((o, i) => `  opponent${i}  |`)
    .join("")}
| ${player} | ${common} |${opponents.map((o) => `    ${o}    |`).join("")}

you:       ${poker.getRankCategory(
    poker.evaluate([...board.common, ...board.player])
  )}
${board.opponents
  .map(
    (o, i) =>
      `opponent${i}: ${poker.getRankCategory(
        poker.evaluate([...board.common, ...o])
      )}`
  )
  .join("\n")}`);
};

main();
