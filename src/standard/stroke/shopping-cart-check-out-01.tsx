import React from "react";
const ShoppingCartCheckOut_01: React.FC<
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
        d="M3 2.5h2.5l2.229 13.819A2 2 0 0 0 9.703 18H18M9.25 21.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5M18.25 21.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 15.5 11.5-2 1.5-8h-2.5M6 5.5h2.5M11 5l2.5-2.5L16 5m-2.5 4.5V3.109"
      />
    </svg>
  );
};
export default ShoppingCartCheckOut_01;
