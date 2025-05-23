import React from "react";
const BitcoinPiggyBank: React.FC<
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
        d="M21.5 9.732a6.7 6.7 0 0 1 .5 2.539c0 2.114-1.389 4.337-3 5.729v3h-2l-1-1.54c-1.729.456-4.271.456-6 0L9 21H7v-3s-3.5-1-5-4v-3h2c.5-2.568 3.23-5.163 6.02-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.5 11h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 4h1m2.5 3H14m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1M14 7V4m0 3v3m-1 0h1m0-6h1.5M14 10h1.5m0-6V3m0 7v1"
      />
    </svg>
  );
};
export default BitcoinPiggyBank;
