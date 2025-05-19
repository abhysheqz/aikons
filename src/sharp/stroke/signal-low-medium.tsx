import React from "react";
const SignalLowMedium: React.FC<
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
        d="M22 18.217h-2.5m-1.5 0h-2.5M5 10v9m0-9 3-5H2zM9 13v6M13 11v8"
      />
    </svg>
  );
};
export default SignalLowMedium;
