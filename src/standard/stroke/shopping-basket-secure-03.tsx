import React from "react";
const ShoppingBasketSecure_03: React.FC<
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
        d="M11.5 7.5H21a1 1 0 0 1 1 1v2l-1.5.5v.5m-13-4H3a1 1 0 0 0-1 1v2l1.5.5 1.833 8.706a1 1 0 0 0 .978.794H13M7 9.5l2-7m6.5 0L17 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 17.12v-1.97a.634.634 0 0 0-.523-.62 9.1 9.1 0 0 1-2.66-.95.66.66 0 0 0-.634 0 9.1 9.1 0 0 1-2.66.95.634.634 0 0 0-.523.62v1.97c0 2.572 2.542 3.974 3.294 4.333.132.063.28.063.412 0C19.458 21.094 22 19.692 22 17.12Z"
      />
    </svg>
  );
};
export default ShoppingBasketSecure_03;
