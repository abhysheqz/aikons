import React from "react";
const Queue_02: React.FC<
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
        d="M18 18H6c-.943 0-1.414 0-1.707-.293S4 16.943 4 16s0-1.414.293-1.707S5.057 14 6 14h12c.943 0 1.414 0 1.707.293S20 15.057 20 16s0 1.414-.293 1.707S18.943 18 18 18M4 10h16M4 6h16"
      />
    </svg>
  );
};
export default Queue_02;
