import React from "react";
const MoneyRemove_01: React.FC<
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
        d="M14.5 18H2V4h20v8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 8a4 4 0 0 1-4-4M2 8a4 4 0 0 0 4-4M2 14a4 4 0 0 1 4 4M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM22 15.5l-2.25 2.25m0 0L17.5 20m2.25-2.25L17.5 15.5m2.25 2.25L22 20"
      />
    </svg>
  );
};
export default MoneyRemove_01;
