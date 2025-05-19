import React from "react";
const ShoppingCart_01: React.FC<
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
        d="M8.502 16 5.5 2H1.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.504 22a1.5 1.5 0 1 0 0-3.001 1.5 1.5 0 0 0 0 3.001ZM17.509 22a1.5 1.5 0 1 0 0-3.001 1.5 1.5 0 0 0 0 3.001ZM6.514 6.508h15.478a.01.01 0 0 1 .01.01c0 4.641-1.279 9.617-6.476 9.49H9.59c-1.008-.059-3.08.56-3.08 2.989h10.804"
      />
    </svg>
  );
};
export default ShoppingCart_01;
