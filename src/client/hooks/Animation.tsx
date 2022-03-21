import React, { useState, createContext, useContext } from "react";
import { reverseDurationMs, commonCardCounts } from "../constants/meta";

export const AnimationContext = createContext<{
  reverseIndex: number;
  playReverse: (row: number) => void;
}>({
  reverseIndex: -1,
  playReverse: () => void 0,
});

type Props = {
  children: React.ReactNode;
};

export const AnimationProvider: React.FC<Props> = ({ children }) => {
  const [reverseIndex, setReverseIndex] = useState(-1);

  const playReverse = (row: number) => {
    setReverseIndex(row);
    setTimeout(() => {
      setReverseIndex(-1);
    }, reverseDurationMs * commonCardCounts);
  };

  return (
    <AnimationContext.Provider
      value={{
        reverseIndex,
        playReverse,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  return useContext(AnimationContext);
};
