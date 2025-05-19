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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 9.5v-6H2v14h10.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15 10.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM2 13.5a4 4 0 0 1 4 4M22 7.5a4 4 0 0 1-4-4M2 7.5a4 4 0 0 0 4-4M20.5 12.5 22 14v.5h-6v1m1.5 5L16 19v-.5h6v-1"
      />
    </svg>
  );
};
export default MoneyExchange_01;
