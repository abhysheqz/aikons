import React from "react";
const ShoppingBasketFavorite_03: React.FC<
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
        d="M11.5 7.5H21a1 1 0 0 1 1 1v2l-1.5.5-.21 1M7.5 7.5H3a1 1 0 0 0-1 1v2l1.5.5 1.833 8.706a1 1 0 0 0 .978.794H12M7 9.5l2-7m6.5 0L17 7M20.743 14.79c-1.596-.833-2.743.394-2.743.394s-1.146-1.227-2.743-.394c-1.934 1.008-2.073 4.957 2.743 6.71 4.816-1.753 4.677-5.702 2.743-6.71"
      />
    </svg>
  );
};
export default ShoppingBasketFavorite_03;
