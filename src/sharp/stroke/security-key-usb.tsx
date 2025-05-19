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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13.5 7.5V2h-7v5.5M15 10V7.5H5V18a4 4 0 0 0 4 4M19 16.5h-7V22h7z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.5 16.5V15a2 2 0 1 0-4 0v1.5M9.5 4.5h1"
      />
    </svg>
  );
};
export default SecurityKeyUsb;
