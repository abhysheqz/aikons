import React from "react";
const SquareArrowUp_03: React.FC<
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
        d="M3.001 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm12.998 4h-8v1.5h8zm-.468 6.22L12 8.94 8.47 12.47l1.061 1.06 1.718-1.718V17h1.5v-5.19l1.722 1.72z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowUp_03;
