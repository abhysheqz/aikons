import React from "react";
const SignalFull_01: React.FC<
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
        d="M1.13 4.507A1 1 0 0 1 2 4h6a1 1 0 0 1 .857 1.515L6 10.276V19a1 1 0 1 1-2 0v-8.723L1.143 5.515a1 1 0 0 1-.013-1.008M9 13a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1M13 10a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1M17 9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1M21 6a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SignalFull_01;
