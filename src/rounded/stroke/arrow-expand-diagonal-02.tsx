import React from "react";
const ArrowExpandDiagonal_02: React.FC<
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
        d="m16 8-8 8M7 3.237c-.75-.011-3.236-.527-3.763 0s-.011 3.012 0 3.763m17.526 10c.011.75.527 3.236 0 3.763s-3.012.011-3.763 0M9.003 9.007 3.617 3.621m16.757 16.753-5.386-5.386"
      />
    </svg>
  );
};
export default ArrowExpandDiagonal_02;
