import * as poker from "../src/poker";
import { generate } from "../src/client/poker";

const main = () => {
  const now = new Date();
  const nowString = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
  const board = generate(nowString);

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
