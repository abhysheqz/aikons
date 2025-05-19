import React from "react";
const LeftToRightListTriangle: React.FC<
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
        d="M10.5 5.5h10M7.5 5.5 3.5 3v5zM7.5 18.5l-4-2.5v5zM10.5 12h10M10.5 18.5h10"
      />
    </svg>
  );
};
export default LeftToRightListTriangle;
