import React from "react";
const IndiaGate: React.FC<
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
        d="M5 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M2 22h20M15 22v-5.727C15 14.465 13.657 13 12 13s-3 1.465-3 3.273V22M17 10h3M4 10h3m4.5 0h1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 22V6h16v16M3 6h18"
      />
    </svg>
  );
};
export default IndiaGate;
