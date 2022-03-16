export type ColorMode = "light" | "dark";

export type Theme = {
  background?: {
    default: string;
  };
};

const lightTheme: Theme = {};

const darkTheme: Theme = {};

export const getTheme = (colorMode: ColorMode): Theme => {
  if (colorMode === "light") {
    return lightTheme;
  }
  return darkTheme;
};

export const wordle = {
  correct: "#6aaa64",
  partial: "#c9b458",
  absent: "#787c7e",
  border: "#d3d6da",
};
