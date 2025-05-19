import React from "react";
const ShoppingBasket_03: React.FC<
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
        d="M14.5 12h-5M6.5 11 10 3m5 0 2.5 5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.03 8h10.867a.1.1 0 0 1 .1.1v2.91l-1.539.48-1.94 9.43a.1.1 0 0 1-.098.08H5.62a.1.1 0 0 1-.098-.08l-1.987-9.405-1.452-.518L2 8.103A.1.1 0 0 1 2.1 8h5.583"
      />
    </svg>
  );
};
export default ShoppingBasket_03;
