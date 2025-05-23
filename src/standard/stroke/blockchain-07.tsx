import React from "react";
const Blockchain_07: React.FC<
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
        d="M9 4 5.5 2 2 4v4l3.5 2L9 8zM22 4l-3.5-2L15 4v4l3.5 2L22 8zM11.5 6h1M2 12.5v5a2 2 0 0 0 2 2h1.5M22 12.5v5a2 2 0 0 1-2 2h-1.5M9 4 5.5 6m0 0L2 4m3.5 2v4M22 4l-3.5 2m0 0L15 4m3.5 2v4M14 17v-1.5a2 2 0 1 0-4 0V17m5.5 1v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1"
      />
    </svg>
  );
};
export default Blockchain_07;
