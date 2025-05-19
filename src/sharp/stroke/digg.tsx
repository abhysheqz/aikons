import React from "react";
const Digg: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.007 5.276V6.29m0 3.047v7.108"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.018 9.34H2.011a.01.01 0 0 0-.01.01v7.086q0 .009.01.01h4.007zm0 0V4.498M15.514 16.42h-4.007a.01.01 0 0 1-.01-.01V9.323a.01.01 0 0 1 .01-.01h4.007zm0 0v3.065h-4.746M22 16.436h-4.008a.01.01 0 0 1-.01-.01V9.34a.01.01 0 0 1 .01-.01h4.007zm0 0v3.066h-4.747"
      />
    </svg>
  );
};
export default Digg;
