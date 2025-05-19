import React from "react";
const SecondBracketSquare: React.FC<
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
        d="M15 8h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1m-6 0H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 21.5h15a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2Z"
      />
    </svg>
  );
};
export default SecondBracketSquare;
