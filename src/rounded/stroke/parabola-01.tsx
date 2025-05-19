import React from "react";
const Parabola_01: React.FC<
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
        strokeWidth={1.5}
        d="M21 3c0 8.284-4.03 15-9 15S3 11.284 3 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 21h1.059m11.647 0h1.059m3.176 0H21M7.235 21h1.06m3.176 0h1.058"
      />
    </svg>
  );
};
export default Parabola_01;
