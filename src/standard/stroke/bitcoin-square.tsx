import React from "react";
const BitcoinSquare: React.FC<
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
        d="M19.5 2.5a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 8.5h1m3.25 3.5H10m3.25 0a1.75 1.75 0 1 0 0-3.5H12m1.25 3.5a1.75 1.75 0 1 1 0 3.5H12M10 12V8.5m0 3.5v3.5m-1 0h1m0-7h2m-2 7h2m0-7v-1m0 8v1"
      />
    </svg>
  );
};
export default BitcoinSquare;
