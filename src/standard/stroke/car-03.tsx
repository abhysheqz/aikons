import React from "react";
const Car_03: React.FC<
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
        d="M2 5h2m15 12h2a1 1 0 0 0 1-1v-2.764a2 2 0 0 0-1.106-1.789L18 10l-2.903-4.147A2 2 0 0 0 13.46 5H4m11 12H9m-4 0h-.764a1 1 0 0 1-.447-.106l-1.236-.618A1 1 0 0 1 2 15.382V9.5L4 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0M2 10h16M9 10V5M18 10H2M9 5v5"
      />
    </svg>
  );
};
export default Car_03;
