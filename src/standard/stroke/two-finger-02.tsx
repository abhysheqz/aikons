import React from "react";
const TwoFinger_02: React.FC<
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
        d="M11.001 5.5a1.5 1.5 0 0 0-3 0V9m3-3.5v5m0-5v-2a1.5 1.5 0 1 1 3 0v6m4 12.5v-1.5l1.124-1.404a4 4 0 0 0 .876-2.5V12.5a2 2 0 0 0-2-2h-1m-9 11.5v-1.5l-3.387-4.656a3.21 3.21 0 0 1 .482-4.303L8.002 9m9 3.5v-1a2 2 0 0 0-2-2h-1m0 0v2m-6 2V9"
      />
    </svg>
  );
};
export default TwoFinger_02;
