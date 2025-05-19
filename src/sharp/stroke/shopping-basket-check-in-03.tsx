import React from "react";
const ShoppingBasketCheckIn_03: React.FC<
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
        d="m6.483 10 3.501-8m5.001 0 2.5 5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.985 18 3.001-3 3 3m-3 4v-6.443M12.992 19.974H5.5a.01.01 0 0 1-.01-.008l-2.004-9.468-1.484-.501V7.046a.01.01 0 0 1 .01-.01h5.37M10.977 7h11.01a.01.01 0 0 1 .01.01v2.99l-1.508.508-.327 1.488"
      />
    </svg>
  );
};
export default ShoppingBasketCheckIn_03;
