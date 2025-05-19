import React from "react";
const Trolley_01: React.FC<
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
        strokeWidth={2}
        d="M2 3h2.5l2.229 13.819A2 2 0 0 0 8.703 18.5H21"
      />
      <path
        fill="currentColor"
        d="M8.25 23a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5M17.25 23a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5M20 15h-8a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1M18 9.5h-8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1"
      />
    </svg>
  );
};
export default Trolley_01;
