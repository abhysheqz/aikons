import React from "react";
const SignalFull_02: React.FC<
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
        fill="currentColor"
        d="M2.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zM9.25 10a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zM16.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default SignalFull_02;
