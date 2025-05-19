import React from "react";
const MoneyReceive_02: React.FC<
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
        d="M14.5 14.002a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17 7.02c3.333.145 5 .979 5 .979v13s-2-1-6-1c-5 0-6 2-14 0v-13c2.34.585 4.082.827 5.5.878"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2 10.999c1.951 0 3.705-1.595 3.929-3.246M18.5 7.499c0 2.04 1.765 3.968 3.5 3.968m0 5.531c-1.9 0-3.74 1.31-3.898 3.099M6 20.495a4 4 0 0 0-4-4M12 3.002v5m2.5-2-2.5 2.5-2.5-2.5"
      />
    </svg>
  );
};
export default MoneyReceive_02;
