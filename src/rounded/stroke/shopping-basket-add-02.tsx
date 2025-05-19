import React from "react";
const ShoppingBasketAdd_02: React.FC<
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
        d="M13 18h8m-4 4v-8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 7.5V7a5 5 0 0 1 10 0v.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 22c-2.28 0-3.43-.008-4.232-.725-.812-.724-1.017-1.949-1.427-4.397L3.178 9.936c-.19-1.13-.284-1.694.007-2.065.292-.371.83-.371 1.906-.371h13.818c1.076 0 1.614 0 1.906.37.29.372.196.936.007 2.066L20.476 12M4.5 17.5H10"
      />
    </svg>
  );
};
export default ShoppingBasketAdd_02;
