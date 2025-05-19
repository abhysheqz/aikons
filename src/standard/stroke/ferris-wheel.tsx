import React from "react";
const FerrisWheel: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={6}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 22 4-10 4 10M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4M7 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M21 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  );
};
export default FerrisWheel;
