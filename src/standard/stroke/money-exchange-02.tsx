import React from "react";
const MoneyExchange_02: React.FC<
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
        d="M16 15.5a1 1 0 0 1 1-1h5l-1.5-2m1.5 5a1 1 0 0 1-1 1h-5l1.5 2M14.5 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 9.991V5.118c0-.379-.216-.722-.574-.846C20.572 3.977 18.763 3.5 16 3.5c-4.727 0-5.879 1.787-12.75.293C2.616 3.655 2 4.13 2 4.781v11.048c0 .459.313.86.76.963 5.537 1.28 7.507.516 10.24.07"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7.5c1.951 0 3.705-1.595 3.929-3.246M18.5 4c0 2.04 1.765 3.969 3.5 3.969M6 16.996a4 4 0 0 0-4-4"
      />
    </svg>
  );
};
export default MoneyExchange_02;
