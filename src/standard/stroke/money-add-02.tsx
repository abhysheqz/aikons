import React from "react";
const MoneyAdd_02: React.FC<
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
        d="M14.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12.491V5.618c0-.379-.216-.722-.574-.846C20.572 4.477 18.763 4 16 4c-4.727 0-5.879 1.787-12.75.293C2.616 4.155 2 4.63 2 5.281v11.048c0 .459.313.86.76.963 5.537 1.28 7.507.516 10.24.07"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8c1.951 0 3.705-1.595 3.929-3.246M18.5 4.5c0 2.04 1.765 3.969 3.5 3.969M6 17.496a4 4 0 0 0-4-4M19 14v6m-3-3h6"
      />
    </svg>
  );
};
export default MoneyAdd_02;
