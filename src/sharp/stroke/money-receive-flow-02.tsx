import React from "react";
const MoneyReceiveFlow_02: React.FC<
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
        d="M14.5 13.502a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12 7.502v-4m3 4v-2m-6 2v-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.5 6.547c3 .201 4.5.951 4.5.951v13s-2-1-6-1c-5 0-6 2-14 0v-13c1.819.455 3.275.703 4.5.814"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2 10.498c1.951 0 3.705-1.595 3.929-3.246M18.5 6.998c0 2.04 1.765 3.969 3.5 3.969m0 5.531c-1.9 0-3.74 1.31-3.898 3.098M6 19.994a4 4 0 0 0-4-4"
      />
    </svg>
  );
};
export default MoneyReceiveFlow_02;
