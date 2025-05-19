import React from "react";
const ShoppingBag_03: React.FC<
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
        d="M8 10V6a4 4 0 1 1 8 0v4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 8H5L3.49 18.576A3 3 0 0 0 6.458 22h11.082a3 3 0 0 0 2.97-3.424z"
      />
    </svg>
  );
};
export default ShoppingBag_03;
