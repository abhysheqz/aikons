import React from "react";
const BitcoinStore: React.FC<
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
        d="M3 10.5V19a2 2 0 0 0 2 2h7.5M16 15h1m2.5 3H17m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1M17 18v-3m0 3v3m-1 0h1m0-6h1.5M17 21h1.5m0-6v-1m0 7v1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 11a3 3 0 0 0 3-3c0 2 2.136 3 4 3s4-1 4-3a3 3 0 0 0 5.954.529c.06-.343-.045-.688-.218-.99L20.264 4.96A2 2 0 0 1 20 3.97V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v.969a2 2 0 0 1-.264.992L2.264 7.54c-.173.302-.278.647-.218.99A3 3 0 0 0 5 11Z"
      />
    </svg>
  );
};
export default BitcoinStore;
