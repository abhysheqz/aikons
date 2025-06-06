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
        strokeWidth={1.5}
        d="M13 21h-2.068c-2.75 0-4.126 0-5.08-.76-1.301-1.046-1.39-3.167-1.651-4.652l-.593-3.375a1.93 1.93 0 0 0-1.09-1.4.48.48 0 0 1-.27-.335c-.17-.807-.622-1.931.39-2.377C2.867 8 3.18 8 3.804 8H7.5m4 0h8.696c.625 0 .937 0 1.166.1 1.012.447.56 1.57.39 2.378a.48.48 0 0 1-.27.335c-.74.351-.986.98-1.135 1.687M16 15l3 3m0 0 3 3m-3-3-3 3m3-3 3-3M6.5 11 10 3m5 0 2.5 5"
      />
    </svg>
  );
};
export default ShoppingBasketRemove_03;
