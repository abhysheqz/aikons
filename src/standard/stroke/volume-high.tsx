import React from "react";
const VolumeHigh: React.FC<
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
        d="M7 8.5H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3l7 4.5V4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 9c.625.82 1 1.863 1 3s-.375 2.18-1 3M20 7c1.25 1.366 2 3.106 2 5s-.75 3.634-2 5"
      />
    </svg>
  );
};
export default VolumeHigh;
