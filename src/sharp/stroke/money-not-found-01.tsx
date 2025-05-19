import React from "react";
const MoneyNotFound_01: React.FC<
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
        d="M9.879 9.879a3 3 0 0 0 4.243 4.243M3 3l18 18M22 9a4 4 0 0 1-4-4M2 9a4 4 0 0 0 3.787-2.71M22 15c-.85 0-1.637.265-2.284.716M2 15a4 4 0 0 1 4 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9 5h13v13m-3.5 1H2V5h2.5"
      />
    </svg>
  );
};
export default MoneyNotFound_01;
