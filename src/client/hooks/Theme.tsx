import { createContext, useContext } from "react";
import { ColorMode } from "../constants/theme";

export type ThemeContextType = {
  setColorMode: () => void;
};

const defaultContext: ThemeContextType = {
  setColorMode: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultContext);
export const useTheme = () => useContext(ThemeContext);
