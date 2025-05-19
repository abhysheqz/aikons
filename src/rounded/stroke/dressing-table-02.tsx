import React from "react";
const DressingTable_02: React.FC<
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
        d="M19 16c.5.333 1.3 1.4.5 3s0 2.667.5 3m-1-6H5m14 0v-3M5 16c-.5.333-1.3 1.4-.5 3s0 2.667-.5 3m1-6v-3m15 0h-1M4 13h1m14 0H5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 7.5c0 3.038 2.239 5.5 5 5.5s5-2.462 5-5.5S14.761 2 12 2 7 4.462 7 7.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11 7 1.5-1.5M11.5 9.5 13 8"
      />
    </svg>
  );
};
export default DressingTable_02;
