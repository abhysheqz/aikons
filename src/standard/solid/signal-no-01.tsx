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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.13 4.507A1 1 0 0 1 2 4h6a1 1 0 0 1 .857 1.515L6 10.276V19a1 1 0 1 1-2 0v-8.723L1.143 5.515a1 1 0 0 1-.013-1.008M11.723 8.293a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 1 1 1.414 1.414L16.844 12l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414L14.015 12l-2.292-2.293a1 1 0 0 1 0-1.414M11 19a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M7 19a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M15 19a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M19 19a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SignalNo_01;
