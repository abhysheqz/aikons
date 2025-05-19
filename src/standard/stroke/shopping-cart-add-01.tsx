import React from "react";
const ShoppingCartAdd_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 2.75h2.5l2.229 13.819a2 2 0 0 0 1.974 1.681H18M9.25 21.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.25 21.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5M8 15.75l11.5-2 1.5-8M9.5 5.75h7M13 9.25v-7"
      />
    </svg>
  );
};
export default ShoppingCartAdd_01;
