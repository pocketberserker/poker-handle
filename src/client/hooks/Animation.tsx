import React, { useState, createContext, useContext } from "react";
import {
  reverseDurationMs,
  commonCardCounts,
  shakeDurationMs,
} from "../constants/meta";

export const AnimationContext = createContext<{
  reverseIndex: number;
  reversing: boolean;
  shakeIndex: number;
  shaking: boolean;
  playReverse: (row: number) => void;
  playShake: (row: number) => void;
}>({
  reverseIndex: -1,
  reversing: false,
  shakeIndex: -1,
  shaking: false,
  playReverse: () => void 0,
  playShake: () => void 0,
});

type Props = {
  children: React.ReactNode;
};

export const AnimationProvider: React.FC<Props> = ({ children }) => {
  const [reverseIndex, setReverseIndex] = useState(-1);
  const [shakeIndex, setShakeIndex] = useState(-1);

  const playReverse = (row: number) => {
    setReverseIndex(row);
    setTimeout(() => {
      setReverseIndex(-1);
    }, reverseDurationMs * commonCardCounts);
  };

  const playShake = (row: number) => {
    setShakeIndex(row);
    setTimeout(() => {
      setShakeIndex(-1);
    }, shakeDurationMs);
  };

  return (
    <AnimationContext.Provider
      value={{
        reverseIndex,
        reversing: reverseIndex !== -1,
        playReverse,
        shakeIndex,
        shaking: shakeIndex !== -1,
        playShake,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  return useContext(AnimationContext);
};
