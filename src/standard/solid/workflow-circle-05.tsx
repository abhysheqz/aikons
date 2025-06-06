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
        fill="currentColor"
        fillRule="evenodd"
        d="M6 1.25a3.75 3.75 0 0 0-1 7.365v6.77a3.752 3.752 0 0 0 1 7.365 3.75 3.75 0 0 0 1-7.365V13h9a3 3 0 0 0 3-3V8.615a3.752 3.752 0 0 0-1-7.365 3.75 3.75 0 0 0-1 7.365V10a1 1 0 0 1-1 1H7V8.615A3.752 3.752 0 0 0 6 1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowCircle_05;
