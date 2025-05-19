import React from "react";
const TaskDone_02: React.FC<
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
        d="M7.5 16h3.429M7.5 11h8M10.5 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v8.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 2h-8l.36 2.164A1 1 0 0 0 8.848 5h5.306a1 1 0 0 0 .986-.836z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 19.5 16 22l5-6"
      />
    </svg>
  );
};
export default TaskDone_02;
