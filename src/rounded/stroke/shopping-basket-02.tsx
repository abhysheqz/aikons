import React from "react";
const ShoppingBasket_02: React.FC<
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
        strokeWidth={1.5}
        d="M4.34 16.878 3.179 9.936c-.19-1.13-.284-1.694.007-2.065.292-.371.83-.371 1.906-.371h13.818c1.076 0 1.614 0 1.906.37.29.372.196.936.007 2.066l-1.163 6.942c-.41 2.448-.615 3.672-1.427 4.397S16.253 22 13.92 22h-3.84c-2.333 0-3.5 0-4.312-.725-.812-.724-1.017-1.949-1.427-4.397ZM7 7.5V7a5 5 0 0 1 10 0v.5M4.5 17.5h15"
      />
    </svg>
  );
};
export default ShoppingBasket_02;
