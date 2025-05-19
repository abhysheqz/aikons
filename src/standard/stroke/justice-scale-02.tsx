import React from "react";
const JusticeScale_02: React.FC<
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
        d="m21 17-3-7-3 7M9 17l-3-7-3 7M3.5 10h1.548c1.264 0 2.49-.529 3.476-1.5 2.032-2 4.92-2 6.952 0 .986.971 2.212 1.5 3.476 1.5H20.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 21a4 4 0 0 0 4-4H2a4 4 0 0 0 4 4M18 21a4 4 0 0 0 4-4h-8a4 4 0 0 0 4 4"
      />
    </svg>
  );
};
export default JusticeScale_02;
