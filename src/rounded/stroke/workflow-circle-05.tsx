import React from "react";
const WorkflowCircle_05: React.FC<
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
        d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM21 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 8v8M6 12h8c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C18 10.1 18 9.4 18 8"
      />
    </svg>
  );
};
export default WorkflowCircle_05;
