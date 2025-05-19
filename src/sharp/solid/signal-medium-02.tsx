import React from "react";
const SignalMedium_02: React.FC<
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
        d="M17.25 15.25h4v2h-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.75 11.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zM9.75 7.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default SignalMedium_02;
