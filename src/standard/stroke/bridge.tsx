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
        d="M2 8c.5 0 3-.5 4-2 1 1.5 3 3 6 3s5-1.5 6-3c1 1.5 3.5 2 4 2M2 16h20M6 4v16M18 4v16M10 9v7m4-7v7"
      />
    </svg>
  );
};
export default Bridge;
