import React from "react";
const ChartRose: React.FC<
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
        d="M21 13c0-6.075-4.925-11-11-11v11zM19 13a9 9 0 0 1-9 9v-9zM3 13a7 7 0 0 0 7 7v-7zM5 13a5 5 0 0 1 5-5v5z"
      />
    </svg>
  );
};
export default ChartRose;
