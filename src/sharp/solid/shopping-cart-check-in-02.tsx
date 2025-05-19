import React from "react";
const ShoppingCartCheckIn_02: React.FC<
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
        d="M5 1.25H2v2h2.192l2.74 12.79-.829 1.212L6 17.25A2.75 2.75 0 1 0 8.563 21h5.874a2.751 2.751 0 1 0 0-2H8.564a2.8 2.8 0 0 0-.6-.925l.718-1.05 9.715-1.387a1 1 0 0 0 .843-.816l1.337-7.572H22v-2h-6.7v.211l3.246 3.246L13 14.252 7.454 8.708 10.7 5.461V5.25H6.666l-.688-3.21A1 1 0 0 0 5 1.25m8 11.164 3.707-3.707-1.414-1.414L14 8.586V3h-2v5.586l-1.293-1.293-1.414 1.414zM5.083 20a.917.917 0 1 1 1.834 0 .917.917 0 0 1-1.834 0m11 0a.917.917 0 1 1 1.834 0 .917.917 0 0 1-1.834 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartCheckIn_02;
