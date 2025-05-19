import React from "react";
const SquareUnlock_01: React.FC<
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
        d="M11.996 15.5h.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 9V6.5A4.5 4.5 0 0 1 12 2c1.96 0 3.382 1.252 4 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 9H6a2 2 0 0 0-2 2l.001 9a2 2 0 0 0 2 2H18a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Z"
      />
    </svg>
  );
};
export default SquareUnlock_01;
