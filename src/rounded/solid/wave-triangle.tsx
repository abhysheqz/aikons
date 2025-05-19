import React from "react";
const WaveTriangle: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m13 7.539 1.82 4.249A2 2 0 0 0 16.66 13H21a1 1 0 1 0 0-2h-4.34l-2.584-6.029A1.603 1.603 0 0 0 11 5.603V16.46L9.18 12.212A2 2 0 0 0 7.341 11H3a1 1 0 1 0 0 2h4.34l2.583 6.029A1.603 1.603 0 0 0 13 18.397z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WaveTriangle;
