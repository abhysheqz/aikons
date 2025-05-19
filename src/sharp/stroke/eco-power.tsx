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
        strokeWidth={1.5}
        d="M9 19.782C5.55 19.006 3 16.194 3 12c0-4.97 8-10 8-10s4.212 2.648 6.523 6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.007 15.49C15.504 16.493 13.002 18.496 11 22m2.002-3.004C10.335 13.128 16.506 10.984 21 11c0 4.991-1.997 10.606-7.998 7.996Z"
      />
    </svg>
  );
};
export default EcoPower;
