import React from "react";
const WorkflowSquare_09: React.FC<
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
        d="M4 1.25A1.75 1.75 0 0 0 2.25 3v4c0 .966.784 1.75 1.75 1.75h1v6.5H4A1.75 1.75 0 0 0 2.25 17v4c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 9.75 21v-4A1.75 1.75 0 0 0 8 15.25H7V13h9a3 3 0 0 0 3-3V8.75h1A1.75 1.75 0 0 0 21.75 7V3A1.75 1.75 0 0 0 20 1.25h-4A1.75 1.75 0 0 0 14.25 3v4c0 .966.784 1.75 1.75 1.75h1V10a1 1 0 0 1-1 1H7V8.75h1A1.75 1.75 0 0 0 9.75 7V3A1.75 1.75 0 0 0 8 1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_09;
