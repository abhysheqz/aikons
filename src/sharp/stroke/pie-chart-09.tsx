import React from "react";
const PieChart_09: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.556 4.685A10 10 0 0 0 11 3v10l7.141 7a10 10 0 0 0-1.585-15.315Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14 20.419A8 8 0 1 1 8.21 5.5"
      />
    </svg>
  );
};
export default PieChart_09;
