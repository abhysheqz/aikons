import React from "react";
const Purse_01: React.FC<
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
        d="M16.01 3.876C16.076 3.126 15.914 2 14.778 2c-1.42 0-4.933 5.003-7.757 5.003"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.037 3.876C7.961 3.126 8.144 2 9.421 2c1.597 0 5.425 5.003 8.602 5.003"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.022 10.006h16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.968 6.99H4.015v3.013c-.422 2.404-2.054 3.88-2.014 6.57.022 1.482.742 2.91 1.89 3.847.881.718 1.77.993 3.193 1.21 1.274.195 3.204.415 5.037.363 6.415-.184 8.513-.905 9.595-3.954.42-1.184.335-2.316 0-3.642-.555-1.376-1.674-3.641-1.748-4.419z"
      />
    </svg>
  );
};
export default Purse_01;
