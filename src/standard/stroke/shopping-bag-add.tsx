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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.5 22c-3.205-.006-6.404-.48-7.715-1.39a4.35 4.35 0 0 1-1.581-1.998c-.507-1.31-.023-2.998.946-6.375l.73-2.56A3 3 0 0 1 6.764 7.5h9.472a3 3 0 0 1 2.885 2.176L19.5 11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 7.5V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 11h3M14 18h8m-4 4v-8"
      />
    </svg>
  );
};
export default ShoppingBagAdd;
