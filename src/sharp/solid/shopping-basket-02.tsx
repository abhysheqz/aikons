import React from "react";
const ShoppingBasket_02: React.FC<
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
        d="M5.575 6.75a6.502 6.502 0 0 1 12.848 0h3.076a.75.75 0 0 1 .74.877l-1.53 8.873H3.288L1.76 7.627a.75.75 0 0 1 .74-.877zm2.036 0a4.502 4.502 0 0 1 8.776 0z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M3.635 18.5h16.729l-.733 4.25H4.367z" />
    </svg>
  );
};
export default ShoppingBasket_02;
