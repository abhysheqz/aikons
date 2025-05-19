import React from "react";
const ShoppingCartCheck_02: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M6 6h2m14 0h-3.5" />
      <circle cx={6} cy={20} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={17} cy={20} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path stroke="currentColor" strokeWidth={1.5} d="M8 20h7" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 2h3l3 14-1.368 2"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m10 7 2 2 6-6" />
    </svg>
  );
};
export default ShoppingCartCheck_02;
