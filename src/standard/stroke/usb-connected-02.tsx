import React from "react";
const UsbConnected_02: React.FC<
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
        d="M13.5 7.5V3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4.5m2.998-3h1M15 10V8.5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1V17a5 5 0 0 0 7.5 4.331"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 15.5 14 18l5-6"
      />
    </svg>
  );
};
export default UsbConnected_02;
