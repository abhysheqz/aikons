import React from "react";
const ShoppingBagAdd: React.FC<
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
        d="M7 7.5V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V7.5M19.782 12 18.5 7.5h-14l-1.35 4.737c-.969 3.377-1.453 5.066-.946 6.375.31.802.86 1.498 1.581 1.998 1.38.958 4.848 1.432 8.215 1.387M9.5 11h4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 18h8m-4 4v-8"
      />
    </svg>
  );
};
export default ShoppingBagAdd;
