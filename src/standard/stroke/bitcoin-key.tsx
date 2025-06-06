import React from "react";
const BitcoinKey: React.FC<
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
        strokeWidth={2}
        d="M9 7h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 2a5 5 0 0 0-2 9.584V20l2 2 2-2v-1.792L9.792 17 11 15.792v-4.208A5.001 5.001 0 0 0 9 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 14h1m2.5 3H16m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1M16 17v-3m0 3v3m-1 0h1m0-6h1.5M16 20h1.5m0-6v-1m0 7v1"
      />
    </svg>
  );
};
export default BitcoinKey;
