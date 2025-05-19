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
        d="M15.25 19.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M15.25 9.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M2.25 14.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M2.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.113 9.5 7.47 5.348l1.06-1.696 8 5a1 1 0 0 1 0 1.696L9.887 14.5l6.643 4.152-1.06 1.696-8-5a1 1 0 0 1 0-1.696z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowCircle_02;
