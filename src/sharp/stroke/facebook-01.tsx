import React from "react";
const Facebook_01: React.FC<
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
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.012 6.955h-4.98q-.009.001-.01.01v6.032m0 0V21m0-8.003H10.01m2.013 0h2.973"
      />
    </svg>
  );
};
export default Facebook_01;
