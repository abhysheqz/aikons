import React from "react";
const ShoppingBasketDone_03: React.FC<
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
        d="m6.499 10.5 3.5-8m5 0 2.5 5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13.999 19.5 2 2 6-6M11.997 20.478l-6.498.008a.01.01 0 0 1-.01-.008l-2.004-9.467-1.484-.502V7.56a.01.01 0 0 1 .01-.01h5.37m3.596-.035h11.01a.01.01 0 0 1 .01.01v2.989l-1.508.509-.38 1.977"
      />
    </svg>
  );
};
export default ShoppingBasketDone_03;
