import React from "react";
const SquareArrowMoveRightDown: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.996 9.5H9.5L9.496 17"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.5 7 2.496 2.5L14.5 12m-7.504 2.5 2.5 2.5 2.5-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3v18H3V3z"
      />
    </svg>
  );
};
export default SquareArrowMoveRightDown;
