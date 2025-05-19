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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.999 3v18h-18V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.997 16.5-4-3.5-4 3.5m8-5.5-4-3.5-4 3.5"
      />
    </svg>
  );
};
export default SquareArrowUpDouble;
