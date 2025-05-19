import React from "react";
const ShoppingBasketRemove_02: React.FC<
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
        strokeWidth={1.5}
        d="m14 15 3.5 3.5m0 0L21 22m-3.5-3.5L14 22m3.5-3.5L21 15"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 7.5V7a5 5 0 0 1 10 0v.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m20.393 12.5.43-2.564c.188-1.13.283-1.694-.008-2.065-.292-.371-.83-.371-1.906-.371H5.091c-1.076 0-1.614 0-1.906.37-.29.372-.196.936-.007 2.066l1.163 6.942c.41 2.448.615 3.672 1.427 4.397S7.747 22 10.08 22H11M4.5 17.5H11"
      />
    </svg>
  );
};
export default ShoppingBasketRemove_02;
