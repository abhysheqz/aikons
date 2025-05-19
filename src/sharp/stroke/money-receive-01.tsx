import React from "react";
const MoneyReceive_01: React.FC<
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
        d="M17 7.5h5v14H2v-14h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15 14.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM22 11.5a4 4 0 0 1-4-4M2 11.5a4 4 0 0 0 4-4M22 17.5a4 4 0 0 0-4 4M2 17.5a4 4 0 0 1 4 4M14.5 5.5 12 8 9.5 5.5m2.5-3v4.891"
      />
    </svg>
  );
};
export default MoneyReceive_01;
