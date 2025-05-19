import React from "react";
const BitcoinInvoice: React.FC<
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
        d="M17 8h4V4a2 2 0 1 0-4 0z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 2H5a2 2 0 0 0-2 2v17.5l3.5-2L10 22l3.5-2.5 3.5 2V8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 8h1m2.5 3H8.5m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3V8m0 3v3m-1 0h1m0-6H10m-1.5 6H10m0-6V7m0 7v1"
      />
    </svg>
  );
};
export default BitcoinInvoice;
