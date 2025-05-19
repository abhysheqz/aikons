import React from "react";
const ShoppingBasket_02: React.FC<
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
        d="M5.255 20.283A2 2 0 0 0 7.235 22h9.53a2 2 0 0 0 1.98-1.717L20.5 8h-17zM7.5 8V6.5a4.5 4.5 0 1 1 9 0V8"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M5 18h14" />
    </svg>
  );
};
export default ShoppingBasket_02;
