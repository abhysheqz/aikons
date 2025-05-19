import React from "react";
const Cash_02: React.FC<
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
        d="M14.5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM19 18.733a18.5 18.5 0 0 0-3-.233c-4.294 0-5.638 1.66-11 .703"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16 2.5c4 0 6 1 6 1v13s-2-1-6-1c-5 0-6 2-14 0v-13c8 2 9 0 14 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2 6.5c1.95 0 3.704-1.595 3.929-3.246M18.5 3c0 2.04 1.765 3.969 3.5 3.969m0 5.531c-1.9 0-3.74 1.31-3.898 3.098M6 15.996a4 4 0 0 0-4-4"
      />
    </svg>
  );
};
export default Cash_02;
