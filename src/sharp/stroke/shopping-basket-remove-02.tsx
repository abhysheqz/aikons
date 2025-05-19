import React from "react";
const ShoppingBasketRemove_02: React.FC<
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
        d="M2.5 7.5v-.75a.75.75 0 0 0-.74.877zM5 22l-.74.127.108.623H5zM21.5 7.5l.74.127a.75.75 0 0 0-.74-.877zm-19.74.127 2.5 14.5 1.48-.254-2.5-14.5zM5 22.75h6v-1.5H5zM2.5 8.25h19v-1.5h-19zm18.26-.877-.947 5.5 1.478.254.948-5.5z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.5 7.5a5.5 5.5 0 1 0-11 0M4.5 17.5H11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.5 15 3.5 3.5m0 0 3.5 3.5M17 18.5 13.5 22m3.5-3.5 3.5-3.5"
      />
    </svg>
  );
};
export default ShoppingBasketRemove_02;
