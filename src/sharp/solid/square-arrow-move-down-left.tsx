import React from "react";
const SquareArrowMoveDownLeft: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm12.246 11.5V7h1.5v7.5a.75.75 0 0 1-.75.75h-6.19l1.22 1.22-1.06 1.06-3.03-3.03 3.03-3.03 1.06 1.06-1.22 1.22z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowMoveDownLeft;
