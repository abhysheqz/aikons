import React from "react";
const WorkflowSquare_04: React.FC<
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
        d="M7 2a1 1 0 0 0-2 0v3.25H4A1.75 1.75 0 0 0 2.25 7v4c0 .966.784 1.75 1.75 1.75h1V22a1 1 0 1 0 2 0v-9.25h1A1.75 1.75 0 0 0 9.75 11v-1H16a1 1 0 0 1 1 1v3.25h-1A1.75 1.75 0 0 0 14.25 16v4c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 21.75 20v-4A1.75 1.75 0 0 0 20 14.25h-1V11a3 3 0 0 0-3-3H9.75V7A1.75 1.75 0 0 0 8 5.25H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_04;
