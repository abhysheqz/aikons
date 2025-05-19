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
        fill="currentColor"
        fillRule="evenodd"
        d="M17.97 5.25c-.549 1.728-2.08 3.294-4.629 4.222l-.444.161-.445-.161c-2.548-.928-4.08-2.494-4.63-4.222H6.666l-.688-3.21A1 1 0 0 0 5 1.25H2v2h2.192l2.74 12.79-.829 1.212L6 17.25A2.75 2.75 0 1 0 8.563 21h5.874a2.751 2.751 0 1 0 0-2H8.564a2.8 2.8 0 0 0-.6-.925l.718-1.05 9.715-1.387a1 1 0 0 0 .843-.816l1.337-7.572H22v-2zm-2.33-3.71c-1.597-.833-2.744.394-2.744.394S11.75.707 10.154 1.54C8.22 2.548 8.081 6.497 12.896 8.25c4.816-1.753 4.677-5.702 2.744-6.71M6 19.083a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834m11 0a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartFavorite_02;
