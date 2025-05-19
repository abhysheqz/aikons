import React from "react";
const Variable: React.FC<
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
        d="M3 3v18h18V3zM3 9h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 6h.009m3.99 0h.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.11 12c.563.863.89 1.893.89 3a5.47 5.47 0 0 1-.89 3M6.89 12A5.47 5.47 0 0 0 6 15c0 1.107.327 2.137.89 3M10 13l4 4m0-4-4 4"
      />
    </svg>
  );
};
export default Variable;
