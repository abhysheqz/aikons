import React from "react";
const BitcoinWallet: React.FC<
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
        d="M19 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 6h8m0 0h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10m8-13V4a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v5M2 14h1m2.5 3H3m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1M3 17v-3m0 3v3m-1 0h1m0-6h1.5M3 20h1.5m0-6v-1m0 7v1"
      />
    </svg>
  );
};
export default BitcoinWallet;
