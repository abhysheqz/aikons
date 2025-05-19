import React from "react";
const SquareArrowDownDouble: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm5.492 4.686 3.506 3.067 3.506-3.067.988 1.128-4.494 3.933-4.494-3.933zm0 5.5 3.506 3.067 3.506-3.068.988 1.13-4.494 3.932-4.494-3.933z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDownDouble;
