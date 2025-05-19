import React from "react";
const WorkflowCircle_01: React.FC<
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
        d="M7 2a1 1 0 0 0-2 0v3.385a3.752 3.752 0 0 0 0 7.23V22a1 1 0 1 0 2 0v-9.385A3.76 3.76 0 0 0 9.615 10H16a1 1 0 0 1 1 1v3.385a3.752 3.752 0 0 0 1 7.365 3.75 3.75 0 0 0 1-7.365V11a3 3 0 0 0-3-3H9.615A3.76 3.76 0 0 0 7 5.385z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowCircle_01;
