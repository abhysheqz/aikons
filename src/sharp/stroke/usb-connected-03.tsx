import React from "react";
const UsbConnected_03: React.FC<
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
        d="M14.958 11V7.5H5V17c0 2.761 2.23 5 4.979 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.463 7.5V2h-6.97v5.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.984 4.5h1.992"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13.174 17.72 1.287 1.324 2.368-2.394M19 17.993A4.01 4.01 0 0 1 14.983 22a4.01 4.01 0 0 1-4.018-4.007 4.01 4.01 0 0 1 4.018-4.008A4.01 4.01 0 0 1 19 17.993Z"
      />
    </svg>
  );
};
export default UsbConnected_03;
