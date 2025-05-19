import React from "react";
const EcoPower: React.FC<
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
        d="M9 19.5c-3.45-.777-6-3.306-6-7.5 0-4.97 8-10 8-10s4.188 2.648 6.5 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 15c-1.502 1.001-3.998 3.495-6 7m2.002-3.004C10.335 13.128 16.506 10.984 21 11c0 4.991-1.997 10.606-7.998 7.996"
      />
    </svg>
  );
};
export default EcoPower;
