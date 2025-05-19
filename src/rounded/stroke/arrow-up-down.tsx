import React from "react";
const ArrowUpDown: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 4v16M17 19V4M10 7S7.79 4 7 4 4 7 4 7M20 17s-2.21 3-3 3-3-3-3-3"
      />
    </svg>
  );
};
export default ArrowUpDown;
