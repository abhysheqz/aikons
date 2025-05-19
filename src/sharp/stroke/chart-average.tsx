import React from "react";
const ChartAverage: React.FC<
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
        d="M21 21H3V3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 12h.009m2.99 0h.008m2.99 0h.008m2.99 0h.009m2.989 0h.009m2.989 0H21"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 7c.673-1.122 1.587-2 2.993-2 5.943 0 2.602 12 8.989 12 1.416 0 2.324-.884 3.018-2"
      />
    </svg>
  );
};
export default ChartAverage;
