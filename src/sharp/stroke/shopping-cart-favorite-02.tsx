import React from "react";
const ShoppingCartFavorite_02: React.FC<
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
        d="m8 16 10.5-1.5L20 6"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M22 6h-3.5" />
      <circle cx={6} cy={20} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={17} cy={20} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path stroke="currentColor" strokeWidth={1.5} d="M8 20h7" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 2h3l3 14-1.368 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.244 2.29c-1.597-.833-2.743.394-2.743.394s-1.147-1.227-2.743-.394C7.824 3.298 7.685 7.247 12.5 9c4.816-1.753 4.677-5.702 2.743-6.71Z"
      />
    </svg>
  );
};
export default ShoppingCartFavorite_02;
