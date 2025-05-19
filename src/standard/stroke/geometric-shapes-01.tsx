import React from "react";
const GeometricShapes_01: React.FC<
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
        d="m21.58 9.255-3.644-6.48a.5.5 0 0 0-.872 0l-3.645 6.48a.5.5 0 0 0 .436.745h7.29a.5.5 0 0 0 .436-.745ZM9 2H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
      />
      <circle
        cx={18}
        cy={18}
        r={4}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 14.5-7 7m0-7 7 7"
      />
    </svg>
  );
};
export default GeometricShapes_01;
