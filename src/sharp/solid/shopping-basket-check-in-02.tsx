import React from "react";
const ShoppingBasketCheckIn_02: React.FC<
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
        d="m19.043 13.336 3.707 3.707-1.414 1.414-1.293-1.293v5.586h-2v-5.586l-1.293 1.293-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 1.25a6.5 6.5 0 0 0-6.424 5.5H2a.75.75 0 0 0-.74.877L2.79 16.5h10.968l5.285-5.286 1.772 1.772.924-5.359a.75.75 0 0 0-.74-.877h-3.076a6.5 6.5 0 0 0-6.423-5.5m0 2a4.5 4.5 0 0 0-4.389 3.5h8.777a4.5 4.5 0 0 0-4.388-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m14.672 18.5 1.871 1.871v2.379H3.868l-.733-4.25z"
      />
    </svg>
  );
};
export default ShoppingBasketCheckIn_02;
