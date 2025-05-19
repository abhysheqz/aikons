import React from "react";
const PathfinderOutline: React.FC<
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
        strokeWidth={1.5}
        d="M15.001 7.018V2.01a.01.01 0 0 0-.01-.01H2.108a.01.01 0 0 0-.01.01l-.096 12.95q0 .009.01.01l3.872-.01h1.103M17 9.03l1.888.01 3.102-.01a.01.01 0 0 1 .01.01v12.95a.01.01 0 0 1-.01.01H9.01a.01.01 0 0 1-.01-.01v-4.973"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13 8.983H9.008v4.02m6.001-1.995v3.977h-4.006"
      />
    </svg>
  );
};
export default PathfinderOutline;
