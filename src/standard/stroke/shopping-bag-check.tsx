import React from "react";
const ShoppingBagCheck: React.FC<
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
        strokeWidth={1.5}
        d="m20 12-.478-2.15a3 3 0 0 0-2.928-2.35h-9.33A3 3 0 0 0 4.38 9.678l-.729 2.56c-.969 3.376-1.453 5.065-.946 6.374.31.802.86 1.498 1.581 1.998 1.311.91 4.51 1.384 7.715 1.39"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.5 7.5V6.364C7.5 3.954 9.515 2 12 2s4.5 1.954 4.5 4.364V7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.5 11H13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 19.5 16 21l5.5-5.5"
      />
    </svg>
  );
};
export default ShoppingBagCheck;
