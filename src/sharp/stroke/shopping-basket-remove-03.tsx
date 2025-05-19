import React from "react";
const ShoppingBasketRemove_03: React.FC<
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
        d="m6.497 10.5 3.5-8m5 0 1.97 3.939M15.997 15.5l3 3m0 0 3 3m-3-3-3 3m3-3 3-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.963 19.473H5.5a.01.01 0 0 1-.01-.008L3.486 9.997l-1.484-.501V6.545a.01.01 0 0 1 .01-.01h6.37m2.596-.035h11.01a.01.01 0 0 1 .01.01V9.5l-1.508.508-.38 1.977"
      />
    </svg>
  );
};
export default ShoppingBasketRemove_03;
