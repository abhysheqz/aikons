import React from "react";
const Coordinate_01: React.FC<
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
        d="m4 5 3-3 3 3M19 14l3 3-3 3M2 16.99h5.01m0 0h14.627m-14.628 0v5.005m0-5.006V2.37"
      />
    </svg>
  );
};
export default Coordinate_01;
