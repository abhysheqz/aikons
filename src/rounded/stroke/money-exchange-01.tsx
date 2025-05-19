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
        d="M2.017 13.5C4.217 13.5 6 15.283 6 17.483M6 3.517C6 5.717 4.217 7.5 2.017 7.5M18 3.517c0 2.18 1.769 3.952 3.942 3.983"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 10v-.5c0-2.828 0-4.243-.879-5.121C20.243 3.5 18.828 3.5 16 3.5H8c-2.828 0-4.243 0-5.121.879C2 5.257 2 6.672 2 9.5v2c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M16 15.5a1 1 0 0 1 1-1h5l-1.5-2m1.5 5a1 1 0 0 1-1 1h-5l1.5 2"
      />
    </svg>
  );
};
export default MoneyExchange_01;
