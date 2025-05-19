import React from "react";
const ShoppingBag_02: React.FC<
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
        d="M7.5 8V6.5a4.5 4.5 0 0 1 9 0V8M15 11c0 1.5-1.434 2.5-3 2.5s-3-1-3-2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.032 8H4.007L2 21.886a.1.1 0 0 0 .1.114H21.9a.1.1 0 0 0 .099-.114z"
      />
    </svg>
  );
};
export default ShoppingBag_02;
