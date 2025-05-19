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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm14.75 4H13v1.5h2.19l-7.44 7.44V13h-1.5v4.75H11v-1.5H8.81l7.44-7.44V11h1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDiagonal_01;
