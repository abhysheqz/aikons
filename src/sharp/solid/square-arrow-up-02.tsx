import React from "react";
const SquareArrowUp_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm12.53 8.22L12 6.94l-3.531 3.53 1.06 1.06 1.72-1.72V16h1.5V9.81l1.72 1.72z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowUp_02;
