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
        strokeWidth={1.5}
        d="M17 4v15.46M21 16l-4 4-4-4M7 20V4.322M3 8l4-4 4 4"
      />
    </svg>
  );
};
export default ArrowUpDown;
