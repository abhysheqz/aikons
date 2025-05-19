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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM21 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM8 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM8 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM8 4.5l8 5-8 5 8 5"
      />
    </svg>
  );
};
export default WorkflowCircle_02;
