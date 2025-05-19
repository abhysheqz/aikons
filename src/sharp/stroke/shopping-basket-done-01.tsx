import React from "react";
const ShoppingBasketDone_01: React.FC<
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
        d="M17.499 7.5a5.5 5.5 0 1 0-11 0M13.499 20l2 2 6-6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.01 21.982H5.046L2.499 7.512a.01.01 0 0 1 .01-.012H21.49a.01.01 0 0 1 .01.012l-.916 5.465"
      />
    </svg>
  );
};
export default ShoppingBasketDone_01;
