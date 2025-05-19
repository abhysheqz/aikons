import React from "react";
const BitcoinDown_01: React.FC<
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
        d="M12 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 6v2.5m0 0V11m0-2.5h1.75M12 6V5m0 6.125V12m-2-6h2.75a1.25 1.25 0 1 1 0 2.5m0 0a1.25 1.25 0 1 1 0 2.5H10M9.5 19.5 12 22l2.5-2.5m-2.5-2v3.891"
      />
    </svg>
  );
};
export default BitcoinDown_01;
