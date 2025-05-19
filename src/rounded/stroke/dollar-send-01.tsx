import React from "react";
const DollarSend_01: React.FC<
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
        strokeWidth={1.5}
        d="M10.625 8.63C10.625 6.625 8.778 5 6.5 5S2.375 6.625 2.375 8.63 3.5 11.74 6.5 11.74s4.5 1.038 4.5 3.63C11 17.963 8.985 19 6.5 19S2 17.375 2 15.37"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 3v2m0 16v-2M22 12h-7.5m7.5 0c0 .7-1.994 2.008-2.5 2.5M22 12c0-.7-1.994-2.008-2.5-2.5"
      />
    </svg>
  );
};
export default DollarSend_01;
