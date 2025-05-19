import React from "react";
const WorkflowSquare_10: React.FC<
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
        d="m12 10 4-4-4-4-4 4zM14.5 22v-5h-5v5zM7 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM22 13.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0ZM12 10v7M9.5 8.5l-3 3M14.5 8.5l3 3"
      />
    </svg>
  );
};
export default WorkflowSquare_10;
