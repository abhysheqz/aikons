import React from "react";
const WorkflowCircle_02: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M7.168 3.945a1 1 0 0 1 1.387-.277l7.5 5a1 1 0 0 1 .026 1.646l-5.82 4.158 6.294 4.196a1 1 0 1 1-1.11 1.664l-7.5-5a1 1 0 0 1-.026-1.646l5.82-4.158-6.294-4.196a1 1 0 0 1-.277-1.387"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.25 19.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M15.25 9.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M2.25 14.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M2.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      />
    </svg>
  );
};
export default WorkflowCircle_02;
