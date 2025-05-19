import React from "react";
const Backpack_01: React.FC<
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
        strokeWidth={1.5}
        d="M19 20v-8a7 7 0 1 0-14 0v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 17c1.65-1.83 4.173-3 7-3s5.35 1.17 7 3"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M10 10h4" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 6V5a3 3 0 1 1 6 0v1M5 19H2v-3a3 3 0 0 1 3-3M19 19h3v-3a3 3 0 0 0-3-3"
      />
    </svg>
  );
};
export default Backpack_01;
