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
        d="m22 7-5-5L7 12v3l2 2h2.5zM6.925 15 2.43 19.496a1.467 1.467 0 1 0 2.075 2.074L9 17.075M6.5 20 4 17.5"
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
