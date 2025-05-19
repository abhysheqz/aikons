import React from "react";
const ShoppingBasket_03: React.FC<
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
        d="M14 12h-4M7 10l2-7m6.5 0L17 7.5M11.5 8H21a1 1 0 0 1 1 1v2l-1.5.5-1.833 8.706a1 1 0 0 1-.978.794H6.31a1 1 0 0 1-.978-.794L3.5 11.5 2 11V9a1 1 0 0 1 1-1h4.5"
      />
    </svg>
  );
};
export default ShoppingBasket_03;
