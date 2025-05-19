import React from "react";
const ShoppingBasketAdd_03: React.FC<
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
        d="m6.499 10.5 3.5-8m5 0 2.5 5M14.999 18h7m-3.5 3.5v-7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.02 7H21.9a.1.1 0 0 1 .1.1v2.905l-1.493.497-.312 1.492m-7.197 8.002H5.472L3.52 10.512 2 10.002v-2.99h5.462"
      />
    </svg>
  );
};
export default ShoppingBasketAdd_03;
