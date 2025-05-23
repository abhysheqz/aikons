import React from "react";
const FourFinger_02: React.FC<
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
        d="M11.002 5.5a1.5 1.5 0 0 0-3 0V9m3-3.5v5m0-5v-2a1.5 1.5 0 1 1 3 0v2m4 16.5v-1.5l1.123-1.404a4 4 0 0 0 .876-2.5V7.5a1.5 1.5 0 0 0-3 0m-9 14.5v-1.5l-3.387-4.656a3.21 3.21 0 0 1 .482-4.303L8.002 9m0 4.5V9m6-3.5v6m0-6a1.5 1.5 0 0 1 3 0v2m0 0v5"
      />
    </svg>
  );
};
export default FourFinger_02;
