import React from "react";
const PaymentSuccess_02: React.FC<
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
        d="M14.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM14 18l2 2 6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 11V5s-2-1-6-1c-5 0-6 2-14 0v13c4.639 1.16 6.924.974 9 .614"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2 8c1.951 0 3.705-1.595 3.929-3.246M18.5 4.5c0 2.04 1.765 3.969 3.5 3.969M6 17.496a4 4 0 0 0-4-4"
      />
    </svg>
  );
};
export default PaymentSuccess_02;
