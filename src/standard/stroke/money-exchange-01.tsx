import React from "react";
const MoneyExchange_01: React.FC<
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
        d="M22 10V5.5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M2 13.5a4 4 0 0 1 4 4M22 7.5a4 4 0 0 1-4-4M2 7.5a4 4 0 0 0 4-4M20.5 12.5l1.5 2h-5a1 1 0 0 0-1 1m1.5 5-1.5-2h5a1 1 0 0 0 1-1"
      />
    </svg>
  );
};
export default MoneyExchange_01;
