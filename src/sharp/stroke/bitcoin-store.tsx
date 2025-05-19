import React from "react";
const BitcoinStore: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 10.5V21h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 11a3 3 0 0 0 3-3c0 2 2.136 3 4 3s4-1 4-3a3 3 0 1 0 6 0l-2-3.5V2H4v2.5L2 8a3 3 0 0 0 3 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.938 20.667v-5.334m1.562 0V14m0 8v-1.333M16.938 18h3.125m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.937 1H16M20.063 18c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H16"
      />
    </svg>
  );
};
export default BitcoinStore;
