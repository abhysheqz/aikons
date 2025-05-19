import React from "react";
const SignalLow_02: React.FC<
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
        fillRule="evenodd"
        d="M17 19a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M10 19a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M2.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SignalLow_02;
