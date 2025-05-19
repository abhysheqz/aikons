import React from "react";
const BitcoinWithdraw: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 19V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 11h1m2.5 3h-2.5m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3v-3m0 3v3m-1 0h1m0-6H12m-1.5 6H12m0-6v-1m0 7v1M20.5 9c.863-.222 1.5-1.068 1.5-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2c0 .932.637 1.778 1.5 2"
      />
    </svg>
  );
};
export default BitcoinWithdraw;
