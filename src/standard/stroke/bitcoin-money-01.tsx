import React from "react";
const BitcoinMoney_01: React.FC<
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
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.874 4q.125.481.126 1a4 4 0 0 1-5 3.874M22 8.874q-.481.124-1 .126a4 4 0 0 1-3.874-5M17.126 20A4 4 0 0 1 22 15.126M2 15.126A4 4 0 0 1 6.874 20"
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
export default BitcoinMoney_01;
