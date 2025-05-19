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
        fill="currentColor"
        fillRule="evenodd"
        d="M8.869 5.25H6.666l-.688-3.21A1 1 0 0 0 5 1.25H2v2h2.192l2.74 12.79-.829 1.212L6 17.25A2.75 2.75 0 1 0 8.563 21h5.874a2.751 2.751 0 1 0 0-2H8.564a2.8 2.8 0 0 0-.6-.925l.718-1.05 9.715-1.387a1 1 0 0 0 .843-.816l1.337-7.572H22v-2h-4.04L12 11.21 7.454 6.664zm9.838-2.586L12 9.371 9.293 6.664l1.414-1.414L12 6.543l5.293-5.293zM6 19.084a.917.917 0 1 0 0 1.833.917.917 0 0 0 0-1.834m11 0a.917.917 0 1 0 0 1.833.917.917 0 0 0 0-1.834"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartCheck_02;
