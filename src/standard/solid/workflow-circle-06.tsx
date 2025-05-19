import React from "react";
const WorkflowCircle_06: React.FC<
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
        d="M6 1.25a3.75 3.75 0 0 0-1 7.365v6.77a3.752 3.752 0 0 0 1 7.365 3.75 3.75 0 0 0 1-7.365v-2.486A6.98 6.98 0 0 0 12 15h2.385a3.752 3.752 0 0 0 7.365-1 3.75 3.75 0 0 0-7.365-1H12a5 5 0 0 1-4.964-4.395A3.752 3.752 0 0 0 6 1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowCircle_06;
