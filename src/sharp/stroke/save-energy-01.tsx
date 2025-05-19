import React from "react";
const SaveEnergy_01: React.FC<
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
        strokeWidth={1.5}
        d="M20 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m15.5 4-2 3h3l-2 3" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 14h3l2.5 1.375h1c1.5 0 2.5 1.149 2.5 2.125l-3 1-3-1m6-.5 4.21-1.404a2 2 0 0 1 2.49 1.155l.3.749-9 4.5-7-1.98"
      />
    </svg>
  );
};
export default SaveEnergy_01;
