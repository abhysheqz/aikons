import React from "react";
const WorkflowSquare_01: React.FC<
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
        d="M14 8V3H6v5zM14 18v-5H6v5zM19 18.5l3-3-3-3-3 3zM6.006 5.5H2.008m0 0V2m0 3.5L2 15.5h3.5m8.502 0H16m3-3v-7h-4.998M22 22h-3v-3.5"
      />
    </svg>
  );
};
export default WorkflowSquare_01;
