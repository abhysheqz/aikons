import React from "react";
const ShoppingBasketSecure_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8V6.5a4.5 4.5 0 1 1 9 0V8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 22H6.735a2 2 0 0 1-1.98-1.717L3 8h17l-.5 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 17.62v-1.97a.634.634 0 0 0-.523-.62 9.1 9.1 0 0 1-2.66-.95.66.66 0 0 0-.634 0 9.1 9.1 0 0 1-2.66.95.634.634 0 0 0-.523.62v1.97c0 2.572 2.542 3.974 3.294 4.333.132.063.28.063.412 0C18.458 21.594 21 20.192 21 17.62Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 18h6"
      />
    </svg>
  );
};
export default ShoppingBasketSecure_02;
