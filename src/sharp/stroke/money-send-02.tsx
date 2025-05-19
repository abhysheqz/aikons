import React from "react";
const MoneySend_02: React.FC<
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
        d="M8 7.887C6.494 7.88 4.624 7.654 2 7v13c8 2 9 0 14 0 4 0 6 1 6 1v-13s-1.666-.834-5-.979"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2 10.999c1.951 0 3.705-1.595 3.929-3.246M18.5 7.499c0 2.04 1.765 3.968 3.5 3.968m0 5.531c-1.9 0-3.74 1.31-3.898 3.099M6 20.495a4 4 0 0 0-4-4M9.5 5.502l2.5-2.5 2.5 2.5m-2.5 3v-5"
      />
    </svg>
  );
};
export default MoneySend_02;
