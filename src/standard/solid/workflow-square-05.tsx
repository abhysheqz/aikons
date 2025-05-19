import React from "react";
const WorkflowSquare_05: React.FC<
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
        d="M2.25 3c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v.79l6.506 4.066A1.75 1.75 0 0 1 17 6.25h3c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 20 12.75h-3a1.75 1.75 0 0 1-1.744-1.605L9.886 14.5l5.37 3.356A1.75 1.75 0 0 1 17 16.25h3c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 20 22.75h-3A1.75 1.75 0 0 1 15.25 21v-.79l-6.506-4.065A1.75 1.75 0 0 1 7 17.75H4A1.75 1.75 0 0 1 2.25 16v-3c0-.966.784-1.75 1.75-1.75h3c.918 0 1.67.707 1.744 1.606l5.37-3.356-5.37-3.355A1.75 1.75 0 0 1 7 7.75H4A1.75 1.75 0 0 1 2.25 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_05;
