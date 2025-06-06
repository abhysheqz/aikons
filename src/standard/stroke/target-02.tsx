import React from "react";
const Target_02: React.FC<
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
        d="M17 12a5 5 0 1 1-5-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 2.2q-.97-.198-2-.2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10q-.002-1.03-.2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 8V5l2.987-2.987a.01.01 0 0 1 .017.005l.495 2.475a.01.01 0 0 0 .008.008l2.475.495a.01.01 0 0 1 .005.017l-2.984 2.984-.007.003zm0 0-4 4"
      />
    </svg>
  );
};
export default Target_02;
