import React from "react";
const BitcoinReceipt: React.FC<
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
        d="M4 21.5V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17.5l-4-2-4 2.5-4-2.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 8h1m2.5 3h-2.5m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3V8m0 3v3m-1 0h1m0-6H12m-1.5 6H12m0-6V7m0 7v1"
      />
    </svg>
  );
};
export default BitcoinReceipt;
