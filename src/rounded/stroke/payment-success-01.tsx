import React from "react";
const PaymentSuccess_01: React.FC<
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
        d="M2.017 14C4.217 14 6 15.783 6 17.983M6 4.017C6 6.217 4.217 8 2.017 8M18 4.017C18 6.197 19.769 7.97 21.942 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 11v-1c0-2.828 0-4.243-.879-5.121C20.243 4 18.828 4 16 4H8c-2.828 0-4.243 0-5.121.879C2 5.757 2 7.172 2 10v2c0 2.828 0 4.243.879 5.121C3.757 18 5.172 18 8 18h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0M14 18s1 0 2 2c0 0 3.177-5 6-6"
      />
    </svg>
  );
};
export default PaymentSuccess_01;
