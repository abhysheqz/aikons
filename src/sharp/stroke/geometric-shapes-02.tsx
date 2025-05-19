import React from "react";
const GeometricShapes_02: React.FC<
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
        cx={6.5}
        cy={6.5}
        r={4.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 6h11L5.998 22 6 11"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M16 12h6v9h-9v-6" />
    </svg>
  );
};
export default GeometricShapes_02;
