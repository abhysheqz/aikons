import React from "react";
const ShoppingBasketCheckOut_02: React.FC<
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
        d="M7 8V6.5a4.5 4.5 0 1 1 9 0V8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 22H6.735a2 2 0 0 1-1.98-1.717L3 8h17l-.5 4M17 20l2 2 2-2m-2-4.5v5.89M5 18h8.5"
      />
    </svg>
  );
};
export default ShoppingBasketCheckOut_02;
