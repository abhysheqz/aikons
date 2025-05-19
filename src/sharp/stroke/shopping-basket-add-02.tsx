import React from "react";
const ShoppingBasketAdd_02: React.FC<
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
        d="M17.207 6.738a5.5 5.5 0 1 0-11 0M3.72 17.5h6.78"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 18h8m-4 4v-8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.007 21.5H4.502l-2.5-14.383A.1.1 0 0 1 2.1 7h18.8a.1.1 0 0 1 .099.117l-.944 5.437"
      />
    </svg>
  );
};
export default ShoppingBasketAdd_02;
