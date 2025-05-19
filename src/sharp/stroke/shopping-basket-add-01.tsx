import React from "react";
const ShoppingBasketAdd_01: React.FC<
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
        d="M17.852 6.904c0-2.967-2.52-5.373-5.628-5.373s-5.63 2.406-5.63 5.373"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.27 17.619h8.187m-4.094 3.907v-7.814"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.174 21.037h-7.16L2.457 7.472c-.011-.057.037-.11.1-.11H21.8c.064 0 .112.053.101.11l-.78 4.14"
      />
    </svg>
  );
};
export default ShoppingBasketAdd_01;
