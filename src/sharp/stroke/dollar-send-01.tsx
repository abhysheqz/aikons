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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 5C4.222 5 2.375 6.625 2.375 8.63S3.5 11.74 6.5 11.74s4.5 1.038 4.5 3.63C11 17.963 8.985 19 6.5 19m0-14c2.278 0 4.125 1.625 4.125 3.63M6.5 5V3m0 16C4.015 19 2 17.375 2 15.37M6.5 19v2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 12h7.538M19 15l3-3-3-3"
      />
    </svg>
  );
};
export default DollarSend_01;
