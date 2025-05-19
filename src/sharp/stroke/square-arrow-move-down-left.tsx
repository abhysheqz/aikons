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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 14.504h7.899c.055 0 .101-.066.101-.12V7.005"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.49 17.006 8 14.504l2.49-2.501"
      />
    </svg>
  );
};
export default SquareArrowMoveDownLeft;
