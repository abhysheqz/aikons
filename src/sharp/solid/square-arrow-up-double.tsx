import React from "react";
const SquareArrowUpDouble: React.FC<
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
        d="M2.999 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm13.492 8.186-4.494-3.933-4.494 3.933.988 1.128 3.506-3.067 3.506 3.067zm0 5.5-4.494-3.933-4.494 3.933.988 1.128 3.506-3.067 3.506 3.067z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowUpDouble;
