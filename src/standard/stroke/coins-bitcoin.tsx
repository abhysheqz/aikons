import React from "react";
const CoinsBitcoin: React.FC<
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
        d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 7h1m2.5 3h-2.5m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3V7m0 3v3m-1 0h1m0-6H14m-1.5 6H14m0-6V6m0 7v1M3.1 11a7.179 7.179 0 0 0 9.9 9.9"
      />
    </svg>
  );
};
export default CoinsBitcoin;
