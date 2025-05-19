import React from "react";
const ShoppingBasketRemove_03: React.FC<
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
        d="M11.5 8H21a1 1 0 0 1 1 1v2l-1.5.5-.21 1M7.5 8H3a1 1 0 0 0-1 1v2l1.5.5 1.833 8.706A1 1 0 0 0 6.31 21H12.5M7 10l2-7m6.5 0L17 7.5M16 16l5 5m-5 0 5-5"
      />
    </svg>
  );
};
export default ShoppingBasketRemove_03;
