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
        fill="currentColor"
        fillRule="evenodd"
        d="M17 19a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M9.5 19a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M2 19a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M6.793 4.293a1 1 0 0 1 1.414 0L11.5 7.586l3.293-3.293a1 1 0 1 1 1.414 1.414L12.914 9l3.293 3.293a1 1 0 0 1-1.414 1.414L11.5 10.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L10.086 9 6.793 5.707a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SignalNo_02;
