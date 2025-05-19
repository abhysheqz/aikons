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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 17H2m20 0-2.42-2.5M22 17l-2.42 2.5M7 22V2m0 0 2.5 2.5M7 2 4.5 4.5"
      />
    </svg>
  );
};
export default Coordinate_01;
