import React from "react";
const MoneyExchange_02: React.FC<
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
        d="M14.5 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 10.5V5.427c0-.568-.324-1.082-.867-1.25C20.19 3.883 18.479 3.5 16 3.5c-4.58 0-5.803 1.677-12.122.424C2.921 3.734 2 4.445 2 5.42v10.017c0 .688.473 1.293 1.145 1.441 5.567 1.228 7.412.32 10.355-.093"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7.5c1.951 0 3.705-1.595 3.929-3.246M18.5 4c0 2.04 1.765 3.969 3.5 3.969M6 16.996a4 4 0 0 0-4-4M16 15.5a1 1 0 0 1 1-1h5l-1.5-2m1.5 5a1 1 0 0 1-1 1h-5l1.5 2"
      />
    </svg>
  );
};
export default MoneyExchange_02;
