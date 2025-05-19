import React from "react";
const Blockchain_06: React.FC<
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
        d="M9 4 5.5 2 2 4v4l3.5 2L9 8zM22 4l-3.5-2L15 4v4l3.5 2L22 8zM15.5 16 12 14l-3.5 2v4l3.5 2 3.5-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 6h1M2 12v5a2 2 0 0 0 2 2h1.5M22 12v5a2 2 0 0 1-2 2h-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 4 5.5 6m0 0L2 4m3.5 2v4M22 4l-3.5 2m0 0L15 4m3.5 2v4M15.5 16 12 18m0 0-3.5-2m3.5 2v4"
      />
    </svg>
  );
};
export default Blockchain_06;
