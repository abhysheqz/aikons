import React from "react";
const SignalNo_01: React.FC<
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
        d="M5 10v9m0-9 3-5H2zM18.43 9l-6 6m6 0-6-6M21.75 18.25h-2.5m-1.5 0h-2.5m-1.5 0h-2.5m-1.5 0h-2.5"
      />
    </svg>
  );
};
export default SignalNo_01;
