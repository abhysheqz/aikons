import React from "react";
const SquareArrowDiagonal_01: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm9 5a.75.75 0 0 0 0 1.5h1.19l-6.44 6.44V13.5a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H9.31l6.44-6.44v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDiagonal_01;
