import React from "react";
const SaveMoneyYen: React.FC<
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
        d="M19.745 13a7 7 0 1 0-12.072-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m12 5.5 2 2.556m0 0L16 5.5m-2 2.556V12.5m2-2.667h-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 14h3l2.5 1.375h1c1.5 0 2.5 1.149 2.5 2.125l-3 1-3-1m6-.5 4.21-1.404a2 2 0 0 1 2.49 1.155l.3.749-9 4.5-7-1.98"
      />
    </svg>
  );
};
export default SaveMoneyYen;
