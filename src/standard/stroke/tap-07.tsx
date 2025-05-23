import React from "react";
const Tap_07: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 13.5V12a1.5 1.5 0 0 0-1.5-1.5H12m4.5 3.5v-1a1.5 1.5 0 0 0-1.5-1.5h-.5m-3 1V6.75a1.25 1.25 0 1 0-2.5 0V15l-1.557-1.699a1.38 1.38 0 0 0-2.13.125 1.58 1.58 0 0 0-.027 1.854l2.957 5.208a2 2 0 0 0 1.74 1.012h6.546c1.365 0 2.471-1.142 2.471-2.55V14a1.5 1.5 0 0 0-1.5-1.5H17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6.5a4 4 0 1 1 8 0"
      />
    </svg>
  );
};
export default Tap_07;
