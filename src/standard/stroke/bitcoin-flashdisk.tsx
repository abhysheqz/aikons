import React from "react";
const BitcoinFlashdisk: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 14h1m2.5 3H14m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1M14 17v-3m0 3v3m-1 0h1m0-6h1.5M14 20h1.5m0-6v-1m0 7v1M16 10V8.5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1V17a5 5 0 0 0 5 5M14.5 7.5V3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4.5M10.5 4.5h1"
      />
    </svg>
  );
};
export default BitcoinFlashdisk;
