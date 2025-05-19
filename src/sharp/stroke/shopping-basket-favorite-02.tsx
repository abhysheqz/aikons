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
        strokeWidth={1.5}
        d="M17.499 7.5a5.5 5.5 0 1 0-11 0M4.499 17.5h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19.242 15.29c-1.597-.833-2.743.394-2.743.394s-1.146-1.227-2.743-.394c-1.934 1.008-2.073 4.957 2.743 6.71 4.816-1.753 4.677-5.702 2.743-6.71Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.512 22H5.046L2.499 7.53a.01.01 0 0 1 .01-.012H21.49a.01.01 0 0 1 .01.012l-.796 4.477"
      />
    </svg>
  );
};
export default ShoppingBasketFavorite_02;
