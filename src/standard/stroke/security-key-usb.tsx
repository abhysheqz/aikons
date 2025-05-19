import React from "react";
const SecurityKeyUsb: React.FC<
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
        d="M13.5 7.5V3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4.5M15 10.5v-3H5V17a5 5 0 0 0 5 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 16.5h-5a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1M17.5 16.5V15a2 2 0 1 0-4 0v1.5M9.5 4.5h1"
      />
    </svg>
  );
};
export default SecurityKeyUsb;
