import React from "react";
const Calculator_01: React.FC<
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
        d="M3.5 9.5h17M15.5 6h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 19.5v-15a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 13.5h1m8 0h1m-4.5 0h-1M7 17.5h1m8 0h1m-4.5 0h-1"
      />
    </svg>
  );
};
export default Calculator_01;
