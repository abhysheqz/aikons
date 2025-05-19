import React from "react";
const EarRings_02: React.FC<
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
      <ellipse
        cx={7}
        cy={15.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        rx={3}
        ry={5.5}
      />
      <ellipse
        cx={17}
        cy={15.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        rx={3}
        ry={5.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 10V7c-1.5 0-2-1.101-2-2a2 2 0 1 1 4 0v1l1 1M7 10V7C5.5 7 5 5.899 5 5a2 2 0 1 1 4 0v1l1 1"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m4 14 6 4M14 14l6 4" />
    </svg>
  );
};
export default EarRings_02;
