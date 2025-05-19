import React from "react";
const MapsLocation_02: React.FC<
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
        d="M22 10V5h-7L8.012 2.001 2 5.083V19l6.012-2L12 18.712M8 2v15M15 5v5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 12c-2.21 0-4 1.809-4 4.04 0 1.276.5 2.268 1.5 3.155.705.624 1.987 1.964 2.5 2.805.539-.824 1.795-2.18 2.5-2.805 1-.887 1.5-1.879 1.5-3.155C22 13.81 20.21 12 18 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.998 16h.009"
      />
    </svg>
  );
};
export default MapsLocation_02;
