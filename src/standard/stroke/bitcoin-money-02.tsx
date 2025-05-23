import React from "react";
const BitcoinMoney_02: React.FC<
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
        d="M19 11.11a13 13 0 0 0-1-.11M6 13a13 13 0 0 1-1-.11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.5c-1.332.622-3.083 1-5 1-1.066 0-2.5 0-5-1v15c2.5 1 3.934 1 5 1 1.917 0 3.668-.378 5-1s3.083-1 5-1c3 0 5 1 5 1v-15s-2-1-5-1c-1.917 0-3.668.378-5 1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 9h1m2.5 3h-2.5m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3V9m0 3v3m-1 0h1m0-6H12m-1.5 6H12m0-6V8m0 7v1"
      />
    </svg>
  );
};
export default BitcoinMoney_02;
