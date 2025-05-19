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
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm9.032 4.664a.75.75 0 0 1 1.054.118l1.996 2.495a.746.746 0 0 1 .004.942l-2 2.5a.75.75 0 1 1-1.172-.937l1.026-1.282H10c-.69 0-1.25.56-1.25 1.25V17a.75.75 0 0 1-1.5 0v-5.5A2.75 2.75 0 0 1 10 8.75h4.44l-1.026-1.281a.75.75 0 0 1 .117-1.055"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowMoveRightUp;
