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
        fill="currentColor"
        fillRule="evenodd"
        d="m13 1 3.707 3.707-1.414 1.414L14 4.828v5.586h-2V4.828l-1.293 1.293-1.414-1.414zM6 17.5a2.75 2.75 0 1 0 2.563 3.75h5.874a2.751 2.751 0 1 0 0-2H8.564a2.8 2.8 0 0 0-.6-.925l.718-1.05 9.715-1.387a1 1 0 0 0 .843-.816L20.577 7.5H22v-2h-4.247L15.3 7.953v3.761h-4.6V7.953L8.247 5.5H6.666l-.688-3.21A1 1 0 0 0 5 1.5H2v2h2.192l2.74 12.79-.829 1.212zm-.917 2.75a.917.917 0 1 1 1.834 0 .917.917 0 0 1-1.834 0m11 0a.917.917 0 1 1 1.834 0 .917.917 0 0 1-1.834 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartCheckOut_02;
