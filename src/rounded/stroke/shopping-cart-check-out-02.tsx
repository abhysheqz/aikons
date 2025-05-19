import React from "react";
const ShoppingCartCheckOut_02: React.FC<
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
        d="m8 16 8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h2m14 0h-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 5.5c.492-.506 1.8-2.5 2.5-2.5M16 5.5c-.492-.506-1.8-2.5-2.5-2.5m0 0v8"
      />
      <circle cx={6} cy={20} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={17} cy={20} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076c.15.585.021 1.204-.35 1.686L6.631 18"
      />
    </svg>
  );
};
export default ShoppingCartCheckOut_02;
