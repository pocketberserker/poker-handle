import format from "date-fns/format";
import * as poker from "../src/poker";
import { generate } from "../src/client/generator";

const main = () => {
  const board = generate(format(new Date(), "yyyy-MM-dd"));

  const player = `${poker.stringify(board.player[0])} ${poker.stringify(
    board.player[1]
  )}`;
  const common = board.common.map((card) => poker.stringify(card)).join(" ");
  const opponent = `${poker.stringify(board.opponent[0])} ${poker.stringify(
    board.opponent[1]
  )}`;
  console.log(`|  you  |     common     |  opponent |
| ${player} | ${common} |   ${opponent}   |

you:      ${poker.getRankCategory(
    poker.evaluate([...board.common, ...board.player])
  )}
opponent: ${poker.getRankCategory(
    poker.evaluate([...board.common, ...board.opponent])
  )}
`);
};

main();
