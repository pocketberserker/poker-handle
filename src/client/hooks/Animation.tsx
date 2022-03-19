import React, { useState, createContext, useContext } from "react";

export const AnimationContext = createContext<{
  rotate: number;
  playRotate: (row: number) => void;
}>({
  rotate: -1,
  playRotate: () => void 0,
});

type Props = {
  children: React.ReactNode;
};

const rotateTime = 1300;

export const AnimationProvider: React.FC<Props> = ({ children }) => {
  const [rotate, setRotate] = useState(-1);

  const playRotate = (row: number) => {
    setRotate(row);
    setTimeout(() => {
      setRotate(-1);
    }, rotateTime);
  };

  return (
    <AnimationContext.Provider
      value={{
        rotate,
        playRotate,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  return useContext(AnimationContext);
};
