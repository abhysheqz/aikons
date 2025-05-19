import React from "react";
const CashbackBitcoin: React.FC<
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
        d="M10.5 12h3.75a1.75 1.75 0 1 1 0 3.5H10.5m0-3.5v3.5m0-3.5h3.25a1.75 1.75 0 1 0 0-3.5H10.5m0 3.5V8.5m0 7H9m1.5 0V17m0-8.5H9m1.5 0V7m3 1.5V7m0 8.5V17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2C7.9 2 4.375 4.468 2.832 8M2 4.5l.5 4 4-1"
      />
    </svg>
  );
};
export default CashbackBitcoin;
