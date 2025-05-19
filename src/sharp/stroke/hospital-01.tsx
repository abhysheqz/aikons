import React from "react";
const Hospital_01: React.FC<
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
        d="M14 2v2.998m0 0v2.999m0-2.999h-4M10 2v2.998m0 0v2.999M4 21.989V4.999h4m12 16.99V4.999h-4M13 10.995h3M13 13.993h3M7 13.993h3M7 10.995h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.994 21.998h-7.492a.01.01 0 0 1-.01-.01v-3.983a.01.01 0 0 0-.01-.01h-4.98a.01.01 0 0 0-.01.01v3.968a.01.01 0 0 1-.01.01H1.995"
      />
    </svg>
  );
};
export default Hospital_01;
