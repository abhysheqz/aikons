import React from "react";
const WorkflowSquare_08: React.FC<
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
        d="M4 1.25A1.75 1.75 0 0 0 2.25 3v4c0 .966.784 1.75 1.75 1.75h1v6.5H4A1.75 1.75 0 0 0 2.25 17v4c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 9.75 21v-4A1.75 1.75 0 0 0 8 15.25H7v-2.351A6.98 6.98 0 0 0 12 15h2.25v1c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 21.75 16v-4A1.75 1.75 0 0 0 20 10.25h-4A1.75 1.75 0 0 0 14.25 12v1H12a5 5 0 0 1-4.944-4.25H8A1.75 1.75 0 0 0 9.75 7V3A1.75 1.75 0 0 0 8 1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_08;
