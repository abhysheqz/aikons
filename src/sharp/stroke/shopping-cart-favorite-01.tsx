import React from "react";
const ShoppingCartFavorite_01: React.FC<
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
        d="m8.502 16-3-14h-3.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.502 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.502 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17.245 2.29c-1.597-.833-2.743.394-2.743.394s-1.147-1.227-2.743-.394C9.825 3.298 9.686 7.247 14.502 9c4.816-1.753 4.677-5.702 2.743-6.71Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.31 19H6.506c0-2.43 2.072-3.048 3.08-2.99h5.936c5.197.128 6.476-4.848 6.476-9.49a.01.01 0 0 0-.01-.01l-2.006.01M6.51 6.51l2.496.01"
      />
    </svg>
  );
};
export default ShoppingCartFavorite_01;
