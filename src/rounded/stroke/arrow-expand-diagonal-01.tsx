import React from "react";
const ArrowExpandDiagonal_01: React.FC<
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
        d="m8 8 8 8M17 3.237c.75-.011 3.236-.527 3.763 0s.011 3.012 0 3.763M3.237 17c-.011.75-.527 3.236 0 3.763s3.012.011 3.763 0M14.998 9.007l5.386-5.385M3.626 20.374l5.386-5.386"
      />
    </svg>
  );
};
export default ArrowExpandDiagonal_01;
