import React from "react";
const MoneyReceiveFlow_01: React.FC<
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
        d="M15 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 11a4 4 0 0 1-4-4h4v14H2V7h4a4 4 0 0 1-4 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 17a4 4 0 0 0-4 4M2 17a4 4 0 0 1 4 4M12 7V3M15 7V5M9 7V5"
      />
    </svg>
  );
};
export default MoneyReceiveFlow_01;
