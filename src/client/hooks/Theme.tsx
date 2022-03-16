import { createContext } from "react";

export type ThemeContextType = {
  setColorMode: () => void;
};

const defaultContext: ThemeContextType = {
  setColorMode: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultContext);
