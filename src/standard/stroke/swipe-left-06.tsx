import React from "react";
const SwipeLeft_06: React.FC<
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
        d="M17.001 22v-1.5l1.124-1.404a4 4 0 0 0 .876-2.5V12.5a2 2 0 0 0-2-2h-1m-9 11.5v-1.5l-3.387-4.656a3.21 3.21 0 0 1 .482-4.303L7.002 9m3-.5v-5a1.5 1.5 0 1 0-3 0V9m3-.5v2m0-2h1a2 2 0 0 1 2 2v1m3 1v-1a2 2 0 0 0-2-2h-1m-6 4V9M21 4.502h-5.246M17.5 2 15 4.502l2.5 2.503"
      />
    </svg>
  );
};
export default SwipeLeft_06;
