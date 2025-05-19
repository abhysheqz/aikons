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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 4V2m3 2.993 1.608-1.608M20 8h2M20 12v10H2V4h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.01 15.003c2.816-.077 8.992-1.04 12.74-5.65m-3.837-.359h4.118v3.96"
      />
    </svg>
  );
};
export default ChartBreakoutSquare;
