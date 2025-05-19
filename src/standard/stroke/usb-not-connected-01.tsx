import React from "react";
const UsbNotConnected_01: React.FC<
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
        d="m20 11-6 6m6 0-6-6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 6V3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 16.5V22M11 16.5H8.541a2 2 0 0 1-1.638-.853l-2.541-3.63A2 2 0 0 1 4 10.87V6.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V8M9 8.5h2"
      />
    </svg>
  );
};
export default UsbNotConnected_01;
