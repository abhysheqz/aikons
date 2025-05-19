import React from "react";
const MapsRefresh: React.FC<
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
        d="m20 18 1.874 1a4 4 0 0 0-6.22-4.24M16 18l-1.874-1a4 4 0 0 0 6.154 4.287"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12V5h-7L8.012 2.001 2 5.083V19l6.012-2L11 18.283M8 2v15M15 5v7"
      />
    </svg>
  );
};
export default MapsRefresh;
