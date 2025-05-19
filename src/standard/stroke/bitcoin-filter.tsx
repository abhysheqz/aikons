import React from "react";
const BitcoinFilter: React.FC<
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
        d="M9.5 3h1m2.25 3.5H10.5m2.25 0a1.75 1.75 0 1 0 0-3.5H12m.75 3.5a1.75 1.75 0 1 1 0 3.5H12m-1.5-3.5V3m0 3.5V10m-1 0h1m0-7H12m-1.5 7H12m0-7V2m0 8v1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 7H3v3l6.5 6v6l5-2v-4l6.5-6V7h-3"
      />
    </svg>
  );
};
export default BitcoinFilter;
