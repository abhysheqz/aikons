import React from "react";
const SignalLow_01: React.FC<
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
        d="M9 12a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M11 19a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M15 19a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M19 19a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M1.13 4.507A1 1 0 0 1 2 4h6a1 1 0 0 1 .857 1.515L6 10.276V19a1 1 0 1 1-2 0v-8.723L1.143 5.515a1 1 0 0 1-.013-1.008"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SignalLow_01;
