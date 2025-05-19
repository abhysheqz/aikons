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
        fill="currentColor"
        fillRule="evenodd"
        d="m22.75 17.03-6.004 5.72-2.437-2.785 1.505-1.317 1.063 1.215 4.495-4.281zM11.5 1.25a6.5 6.5 0 0 0-6.424 5.5H2a.75.75 0 0 0-.74.877L2.79 16.5h15.442l2.366-2.253 1.141-6.62A.75.75 0 0 0 21 6.75h-3.076a6.5 6.5 0 0 0-6.424-5.5m0 2a4.5 4.5 0 0 0-4.388 3.5h8.777a4.5 4.5 0 0 0-4.389-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.704 18.5H3.135l.733 4.25h10.884l-2.56-2.926z"
      />
    </svg>
  );
};
export default ShoppingBasketDone_02;
