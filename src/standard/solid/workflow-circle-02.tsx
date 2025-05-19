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
        d="M2.25 4.5a3.25 3.25 0 0 1 6.409-.767l6.926 4.329a3.25 3.25 0 1 1 0 2.877L9.887 14.5l5.698 3.562a3.25 3.25 0 1 1-.244 2.206l-6.926-4.33a3.25 3.25 0 1 1 0-2.876L14.113 9.5 8.415 5.94A3.25 3.25 0 0 1 2.25 4.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowCircle_02;
