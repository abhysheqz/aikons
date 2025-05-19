import React from "react";
const SquareArrowShrink_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm13.469 4.22-2.72 2.72V7h-1.5v4.75h4.75v-1.5h-2.19l2.72-2.72zm-9.47 7.28h2.19l-2.72 2.72 1.06 1.06 2.72-2.72V17h1.5v-4.75H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowShrink_02;
