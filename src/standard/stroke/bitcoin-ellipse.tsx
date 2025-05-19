import React from "react";
const BitcoinEllipse: React.FC<
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 12h-3m3 0a2 2 0 1 0 0-4h-1m1 4a2 2 0 1 1 0 4h-1m-2-4V8m0 4v4M9 8h1m-1 8h1m0-8h2m-2 8h2m0-8V6.5m0 9.5v1.5"
      />
    </svg>
  );
};
export default BitcoinEllipse;
