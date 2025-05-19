import React from "react";
const ChartBreakoutSquare: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.055 4V2.5m3 2.493 1.5-1.493m-.5 4.5H21.5M21.5 12v7.5a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h7.556"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.555 15c8.5 0 13.5-7 13.5-7m0 0h-3.5m3.5 0v3.5"
      />
    </svg>
  );
};
export default ChartBreakoutSquare;
