import React from "react";
const ShoppingBag_01: React.FC<
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
        d="M7.5 7.5V6.364C7.5 3.954 9.515 2 12 2s4.5 1.954 4.5 4.364V7.5M2.704 18.612c-.507-1.31-.023-2.998.946-6.375L5 7.5h14l1.35 4.737c.968 3.377 1.453 5.066.947 6.375a4.35 4.35 0 0 1-1.582 1.998c-2.729 1.894-12.82 1.812-15.43 0a4.35 4.35 0 0 1-1.581-1.998ZM10 11h4"
      />
    </svg>
  );
};
export default ShoppingBag_01;
