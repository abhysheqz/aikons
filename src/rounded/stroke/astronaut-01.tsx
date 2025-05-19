import React from "react";
const Astronaut_01: React.FC<
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
      <circle
        cx={12}
        cy={11}
        r={3}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.657 18A9 9 0 1 0 3 11v9M18.5 17.5l-4.379-4.379M18 5 14.12 8.879"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 18H5c-.943 0-1.414 0-1.707.293S3 19.057 3 20s0 1.414.293 1.707S4.057 22 5 22h15a1 1 0 0 0 1-1 3 3 0 0 0-3-3"
      />
    </svg>
  );
};
export default Astronaut_01;
