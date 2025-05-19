import React from "react";
const ShoppingBasketCheckIn_01: React.FC<
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
        d="M17.483 7.5c0-3.038-2.454-5.5-5.481-5.5S6.52 4.462 6.52 7.5M16.486 16.5l2.492-2.5 2.491 2.5M18.978 22v-7.398"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.976 21.988h-9.93L2.499 7.518a.01.01 0 0 1 .01-.012H21.49a.01.01 0 0 1 .01.012l-.808 4.476"
      />
    </svg>
  );
};
export default ShoppingBasketCheckIn_01;
