import React from "react";
const SquareArrowMoveRightUp: React.FC<
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
        d="M13.5 7 16 9.5 13.5 12"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 17V9.623c0-.056.046-.122.101-.122H16"
      />
    </svg>
  );
};
export default SquareArrowMoveRightUp;
