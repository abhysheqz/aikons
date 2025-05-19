import React from "react";
const SquareArrowMoveLeftUp: React.FC<
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
        d="m10.496 7-2.5 2.5 2.5 2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 9.502h7.899c.055 0 .101.065.101.12V17"
      />
    </svg>
  );
};
export default SquareArrowMoveLeftUp;
