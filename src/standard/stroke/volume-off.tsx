import React from "react";
const VolumeOff: React.FC<
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
        d="M10 6.5 14 4v6.5M7.778 8 7 8.5H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3l7 4.5v-5.778M17 9c.625.82 1 1.863 1 3 0 .714-.148 1.392-.413 2M20 7c1.25 1.366 2 3.106 2 5a7.23 7.23 0 0 1-1.22 4M22 22 2 2"
      />
    </svg>
  );
};
export default VolumeOff;
