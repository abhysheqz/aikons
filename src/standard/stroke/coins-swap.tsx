import React from "react";
const CoinsSwap: React.FC<
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
        d="M8.5 21.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 6.668a6.165 6.165 0 1 1 7.832 7.832M2.5 8.5v-3a2 2 0 0 1 2-2h3L6 5.5M21.5 15.5v3a2 2 0 0 1-2 2h-3l1.5-2"
      />
    </svg>
  );
};
export default CoinsSwap;
