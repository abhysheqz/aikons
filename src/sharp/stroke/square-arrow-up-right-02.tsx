import React from "react";
const SquareArrowUpRight_02: React.FC<
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
        d="m15 9-7 7m2-8h6v6"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M21.5 2.5h-19v19h19z" />
    </svg>
  );
};
export default SquareArrowUpRight_02;
