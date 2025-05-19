import React from "react";
const AirplaneTakeOff_01: React.FC<
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
        d="M2 19h16M4 13.5 2 8l2.5-1.5 2 2.5 7.041-3.66c1.633-.853 3.538-1.168 5.22-.414.888.4 1.87.951 2.736 1.694.972.833.44 2.252-.785 2.633L15 11l-1 2.5L9.5 15l1-3z"
      />
    </svg>
  );
};
export default AirplaneTakeOff_01;
