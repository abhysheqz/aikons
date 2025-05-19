import React from "react";
const Bridge: React.FC<
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
        d="M3 7c.5 0 2-.5 3-2 1 1.5 3 4 6 4s5-2.5 6-4c1 1.5 2.5 2 3 2M6 4v16M2 16h20M18 4v16M10 9v7M14 9v7"
      />
    </svg>
  );
};
export default Bridge;
