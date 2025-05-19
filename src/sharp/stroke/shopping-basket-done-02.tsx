import React from "react";
const ShoppingBasketDone_02: React.FC<
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
        d="M17.499 7.5a5.5 5.5 0 1 0-11 0M4.499 17.5h7M13.499 20l1.75 2 5.25-5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.52 22H5.046L2.499 7.53a.01.01 0 0 1 .01-.012H21.49a.01.01 0 0 1 .01.012l-1.082 6.463"
      />
    </svg>
  );
};
export default ShoppingBasketDone_02;
