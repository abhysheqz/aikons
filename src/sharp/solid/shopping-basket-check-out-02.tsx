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
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 1.25a6.5 6.5 0 0 0-6.424 5.5H2a.75.75 0 0 0-.74.877L2.79 16.5h12.968l.785-.786v-3.878h4.47l.726-4.209a.75.75 0 0 0-.74-.877h-3.075a6.5 6.5 0 0 0-6.424-5.5m0 2a4.5 4.5 0 0 0-4.389 3.5h8.777a4.5 4.5 0 0 0-4.388-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m13.758 18.5-.543.543 3.707 3.707H3.868l-.733-4.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.043 22.75 3.707-3.707-1.414-1.414-1.293 1.293v-5.586h-2v5.586l-1.293-1.293-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBasketCheckOut_02;
