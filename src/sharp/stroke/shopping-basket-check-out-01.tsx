import React from "react";
const ShoppingBasketCheckOut_01: React.FC<
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
        d="M17.5 7.5a5.5 5.5 0 1 0-11 0M16.5 19.5 19 22l2.5-2.5M19 14v7.343M14.006 22h-8.96L2.499 7.53a.01.01 0 0 1 .01-.012H21.49a.01.01 0 0 1 .01.012l-.916 5.465"
      />
    </svg>
  );
};
export default ShoppingBasketCheckOut_01;
