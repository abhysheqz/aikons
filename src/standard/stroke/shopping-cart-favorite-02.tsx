import React from "react";
const ShoppingCartFavorite_02: React.FC<
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
        d="M2 2h2.5L7 16l-1 2M6 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8 20h6M7 16l11.5-1.65L20 5h1M15.243 3.29c-1.597-.833-2.743.394-2.743.394s-1.146-1.227-2.743-.394C7.823 4.298 7.684 8.247 12.5 10c4.816-1.753 4.677-5.702 2.743-6.71"
      />
    </svg>
  );
};
export default ShoppingCartFavorite_02;
