import React from "react";
const CricketBat: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21.275 6.275-3.568-3.568a1 1 0 0 0-1.414 0l-8.707 8.707A2 2 0 0 0 7 12.828v1.758a1 1 0 0 0 .293.707l1.414 1.414a1 1 0 0 0 .707.293H10.7a2 2 0 0 0 1.38-.552l9.178-8.741a1 1 0 0 0 .017-1.432ZM6.925 15 2.43 19.496a1.467 1.467 0 1 0 2.075 2.074L9 17.075M6.5 20 4 17.5"
      />
      <circle
        cx={2.5}
        cy={2.5}
        r={2.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        transform="matrix(-1 0 0 1 21 16)"
      />
    </svg>
  );
};
export default CricketBat;
