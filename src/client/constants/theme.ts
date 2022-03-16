export type ColorMode = "light" | "dark";

export type Theme = {
  background?: {
    default: string;
  };
};

const lightTheme: Theme = {
  // background: {
  //   default: '#ffffff',
  // },
};

const darkTheme: Theme = {
  // background: {
  //   default: '#222639',
  // },
};

export const getTheme = (colorMode: ColorMode): Theme => {
  if (colorMode === "light") {
    return lightTheme;
  }
  return darkTheme;
};
