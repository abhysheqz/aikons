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
        d="M5 16c-.5.333-1.3 1.4-.5 3 1 2-.5 3-.5 3m1-6v-3m0 3h14M5 13H4m1 0h14m0 3c.5.333 1.3 1.4.5 3-1 2 .5 3 .5 3m-1-6v-3m0 0h1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 7.5c0 3.038 2.239 5.5 5 5.5s5-2.462 5-5.5S14.761 2 12 2 7 4.462 7 7.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10.999 7 1.5-1.5m-1 4 1.5-1.5"
      />
    </svg>
  );
};
export default DressingTable_02;
