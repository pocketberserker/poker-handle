import { createContext } from "react";
import { ColorMode } from "../constants/theme";

export type ThemeContext = {
  setColorMode: (mode: ColorMode) => void;
};

const defaultContext: ThemeContext = {
  setColorMode: () => {},
};

export const ThemeContext = createContext<ThemeContext>(defaultContext);
