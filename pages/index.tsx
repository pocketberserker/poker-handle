import type { NextPage } from "next";

import * as poker from "../src/client/generator";
import { HomeTemplate } from "../src/client/templates/HomeTemplate";

const Home: NextPage = () => {
  const now = new Date();
  const nowString = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
  return <HomeTemplate board={poker.generate(nowString)} />;
};

export default Home;
