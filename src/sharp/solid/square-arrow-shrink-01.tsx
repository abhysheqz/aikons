import React from "react";
const SquareArrowShrink_01: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm3.469 5.28 2.72 2.72h-2.19v1.5h4.75V7h-1.5v2.19L7.53 6.47zm10.53 4.72h-4.75V17h1.5v-2.19l2.72 2.72 1.06-1.06-2.72-2.72H17z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowShrink_01;
