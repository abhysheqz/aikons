import React from "react";
const ShoppingCartCheckOut_01: React.FC<
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
        d="m8.502 16-3-14h-3.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.502 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.502 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11.502 5l3-3 3 3m-3 5V2.607"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.31 19H6.506c0-2.43 2.072-3.048 3.08-2.99h5.936c5.197.128 6.476-4.848 6.476-9.49a.01.01 0 0 0-.01-.01l-3.005.01M6.51 6.51h3.52"
      />
    </svg>
  );
};
export default ShoppingCartCheckOut_01;
