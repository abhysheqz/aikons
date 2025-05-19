import React from "react";
const Crane: React.FC<
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
        d="M4.5 12V5a1 1 0 0 1 1-1h4.086a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V12a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1M15 22H5a3 3 0 1 1 0-6h10a3 3 0 1 1 0 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.996 19h.008M6 19h.009m7.982 0H14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 6.5 3.702-4.164A1 1 0 0 1 17.449 2H20.5m0 2.5v1m0 2v1m0 2.5v1a1.5 1.5 0 0 1 0 3c-.653 0-1.294-.417-1.5-1"
      />
    </svg>
  );
};
export default Crane;
