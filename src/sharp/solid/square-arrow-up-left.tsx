import React from "react";
const SquareArrowUpLeft: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm11 7.5v-1.5H8.25V14h1.5v-3.19l4.72 4.72 1.06-1.06-4.72-4.72z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowUpLeft;
