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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6.499 10 3.5-8m5 0 2.5 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.742 15.29c-1.597-.833-2.743.394-2.743.394s-1.146-1.227-2.743-.394c-1.934 1.008-2.073 4.957 2.743 6.71 4.816-1.753 4.677-5.702 2.743-6.71Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.997 19.978-6.498.008a.01.01 0 0 1-.01-.008l-2.004-9.467-1.484-.502V7.06a.01.01 0 0 1 .01-.01h5.37m3.596-.035h11.01a.01.01 0 0 1 .01.01v2.989l-1.508.509-.38 1.977"
      />
    </svg>
  );
};
export default ShoppingBasketFavorite_03;
