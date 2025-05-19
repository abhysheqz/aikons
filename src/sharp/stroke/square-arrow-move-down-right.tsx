import React from "react";
const SquareArrowMoveDownRight: React.FC<
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
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13.5 17 2.5-2.5-2.5-2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 7.006v7.377c0 .056.046.121.101.121H16"
      />
    </svg>
  );
};
export default SquareArrowMoveDownRight;
