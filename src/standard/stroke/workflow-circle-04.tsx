import React from "react";
const WorkflowCircle_04: React.FC<
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
        d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM21 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6 16V8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 8v3a2 2 0 0 1-2 2H9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C6 14.602 6 15.068 6 16"
      />
    </svg>
  );
};
export default WorkflowCircle_04;
