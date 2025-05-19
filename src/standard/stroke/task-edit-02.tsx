import React from "react";
const TaskEdit_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 16h3.429M7 11h8M10.5 22h-1m10-10.5V4a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 2H7l.36 2.164A1 1 0 0 0 8.348 5h5.306a1 1 0 0 0 .986-.836zM13.5 19.5V22H16l5.5-5.5L19 14z"
      />
    </svg>
  );
};
export default TaskEdit_02;
