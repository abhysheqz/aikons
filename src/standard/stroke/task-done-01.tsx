import React from "react";
const TaskDone_01: React.FC<
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
        d="M7.5 16h3.429M7.5 11h8M15.5 3.5H18a2 2 0 0 1 2 2v7m-12.5-9H5a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2h5.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 2H9a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 0-3Z"
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
export default TaskDone_01;
