import React from "react";
const SignalNo_02: React.FC<
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
        d="M21 19h-3M13.5 19h-3M6 19H3M15.5 5l-8 8m8 0-8-8"
      />
    </svg>
  );
};
export default SignalNo_02;
