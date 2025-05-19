import React from "react";
const ShoppingBasketRemove_01: React.FC<
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
        d="M17.5 7.5a5.5 5.5 0 1 0-11 0M4.5 17.5H11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.5 15 3.5 3.5m0 0 3.5 3.5M17 18.5 13.5 22m3.5-3.5 3.5-3.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.068 21.982H5.047L2.5 7.512a.01.01 0 0 1 .01-.012h18.981a.01.01 0 0 1 .01.012l-.915 5.465"
      />
    </svg>
  );
};
export default ShoppingBasketRemove_01;
