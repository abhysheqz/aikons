import React from "react";
const MapsLocation_01: React.FC<
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
        d="M22 10V5h-7L8.012 2.001 2 5.083V19l6.012-2L11 18.283M8 2v15M15 5v4.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 16.5c0 3.5-4.5 5.5-4.5 5.5S13 20 13 16.5a4.5 4.5 0 1 1 9 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M17.5 16.5h.009"
      />
    </svg>
  );
};
export default MapsLocation_01;
