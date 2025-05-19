import React from "react";
const MoreOrLessSquare: React.FC<
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
        d="M3 21h18V3H3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 11.99h10.004m-.01-3.009H7.002l1.982-1.976m-1.989 7.987h9.996l-2.006 2.003"
      />
    </svg>
  );
};
export default MoreOrLessSquare;
