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
        fill="currentColor"
        fillRule="evenodd"
        d="M11.499 3.25a4.5 4.5 0 0 0-4.5 4.5h-2a6.5 6.5 0 1 1 13 0h-2a4.5 4.5 0 0 0-4.5-4.5M22.75 16.043l-6.708 6.707-2.707-2.707 1.414-1.414 1.293 1.293 5.293-5.293z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 6.75a.75.75 0 0 0-.74.877L3.869 22.75h10.054l-2.707-2.707 3.535-3.536 1.293 1.293 4.763-4.763.933-5.41A.75.75 0 0 0 21 6.75z"
      />
    </svg>
  );
};
export default ShoppingBasketDone_01;
