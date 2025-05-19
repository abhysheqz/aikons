import React from "react";
const ShoppingBasketCheckOut_03: React.FC<
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
        d="m7 9.5 2-7m6.5 0L17 7M11.5 7.5H21a1 1 0 0 1 1 1v2l-1.5.5-.21 1M7.5 7.5H3a1 1 0 0 0-1 1v2l1.5.5 1.833 8.706a1 1 0 0 0 .978.794H14M16 19.5l2 2 2-2M18 15v5.89"
      />
    </svg>
  );
};
export default ShoppingBasketCheckOut_03;
