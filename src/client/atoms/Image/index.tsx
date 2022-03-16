import React from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export const Image: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
};
