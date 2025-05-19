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
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM7.5 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H10v-2H8.5V9H10V7zM14 9h1.5v6H14v2h2.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SecondBracketSquare;
