import React from "react";
const ElectricHome_01: React.FC<
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
        d="M20 8.5v13h-5M4 8.5v13h8v-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 10 12 2.5 2 10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.014 12.023h1.472v3.005l-1.981 2.962h-2.993l-2.016-2.962v-3.005h1.481m4.037 0V9.01m0 3.012H9.977m0 0V9.01"
      />
    </svg>
  );
};
export default ElectricHome_01;
