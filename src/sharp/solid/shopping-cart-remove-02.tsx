import React from "react";
const ShoppingCartRemove_02: React.FC<
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
        d="M9.454 5.25H6.666l-.688-3.21A1 1 0 0 0 5 1.25H2v2h2.192l2.74 12.79-.829 1.212L6 17.25A2.75 2.75 0 1 0 8.563 21h5.874a2.751 2.751 0 1 0 0-2H8.564a2.8 2.8 0 0 0-.6-.925l.718-1.05 9.715-1.387a1 1 0 0 0 .843-.816l1.337-7.572H22v-2h-5.454l2 2-3.253 3.253L13 8.21l-2.293 2.293L7.454 7.25zm2.132-.293L9.293 2.664l1.414-1.414L13 3.543l2.293-2.293 1.414 1.414-2.293 2.293 2.293 2.293-1.414 1.414L13 6.371l-2.293 2.293L9.293 7.25zM6 19.083a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834m11 0a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartRemove_02;
