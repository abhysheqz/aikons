import React from "react";
const ShoppingBagFavorite: React.FC<
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
        strokeWidth={1.5}
        d="M7.5 7.5V6.364C7.5 3.954 9.515 2 12 2s4.5 1.954 4.5 4.364V7.5M19.997 11 19 7.5H5l-1.35 4.737c-.969 3.377-1.453 5.066-.946 6.375.31.802.86 1.498 1.581 1.998 1.311.91 4.51 1.384 7.715 1.39M10 11h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.243 15.29c-1.596-.833-2.743.394-2.743.394s-1.146-1.227-2.743-.394c-1.934 1.008-2.073 4.957 2.743 6.71 4.816-1.753 4.677-5.702 2.743-6.71Z"
      />
    </svg>
  );
};
export default ShoppingBagFavorite;
