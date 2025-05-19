import React from "react";
const TaskRemove_02: React.FC<
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
        d="M5.75 1.25H2a.75.75 0 0 0-.75.75v20c0 .414.335.75.75.75h12.628l-1.414-1.414 2.293-2.293-2.293-2.293 3.536-3.535 2.293 2.293.707-.707V2a.75.75 0 0 0-.75-.75h-3.75v3.5a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75zm.25 9.5h9v-1.5H6zm0 5h5v-1.5H6z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13.75 1.25h-6.5V4h6.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.458 19.042 2.293-2.293-1.415-1.414-2.292 2.293-2.293-2.293-1.415 1.414 2.293 2.293-2.293 2.293 1.415 1.414 2.293-2.293 2.292 2.293 1.415-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TaskRemove_02;
