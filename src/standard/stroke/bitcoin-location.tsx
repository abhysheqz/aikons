import React from "react";
const BitcoinLocation: React.FC<
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
        d="M6 18c-1.245.424-2 .982-2 1.593C4 20.923 7.582 22 12 22s8-1.078 8-2.407c0-.611-.755-1.169-2-1.593"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 9.65C19.5 15.6 12 19 12 19s-7.5-3.4-7.5-9.35C4.5 5.425 7.858 2 12 2s7.5 3.425 7.5 7.65"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 7h1m2.5 3h-2.5m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3V7m0 3v3m-1 0h1m0-6H12m-1.5 6H12m0-6V6m0 7v1"
      />
    </svg>
  );
};
export default BitcoinLocation;
