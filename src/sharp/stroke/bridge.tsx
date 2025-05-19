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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8c.5 0 3-.5 4-2 1 1.5 3 4 6 4s5-2.5 6-4c1 1.5 3.5 2 4 2M6 4v16M2 15h20M18 4v16M10 10v5M14 10v5"
      />
    </svg>
  );
};
export default Bridge;
