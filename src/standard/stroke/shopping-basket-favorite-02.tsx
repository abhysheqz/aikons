import React from "react";
const ShoppingBasketFavorite_02: React.FC<
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
        d="M11 22H6.735a2 2 0 0 1-1.98-1.717L3 8h17l-.5 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.743 15.29c-1.596-.833-2.743.394-2.743.394s-1.146-1.227-2.743-.394C12.323 16.298 12.184 20.247 17 22c4.816-1.753 4.677-5.702 2.743-6.71M5 18h5"
      />
    </svg>
  );
};
export default ShoppingBasketFavorite_02;
