import React from "react";
const WorkflowSquare_02: React.FC<
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
        d="M2.25 3c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 10 6.75H8v.75h8a2 2 0 0 1 2 2v.75h2c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 20 15.75h-2v1.5h2c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 20 22.75h-6A1.75 1.75 0 0 1 12.25 21v-2c0-.966.784-1.75 1.75-1.75h2v-1.5h-2A1.75 1.75 0 0 1 12.25 14v-2c0-.966.784-1.75 1.75-1.75h2V9.5H8a2 2 0 0 1-2-2v-.75H4A1.75 1.75 0 0 1 2.25 5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_02;
