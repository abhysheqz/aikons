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
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 3c0-.966.784-1.75 1.75-1.75h5a1.75 1.75 0 1 1 0 3.5H9A1.75 1.75 0 0 1 7.25 3M21.64 15.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.726 1.726 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.96 2.75A3.05 3.05 0 0 0 9 6.05h5a3.05 3.05 0 0 0 3.04-3.3H18a2.75 2.75 0 0 1 2.75 2.75v8.012a2.5 2.5 0 0 0-1.67.887l-3.248 3.898-.564-.565a2.5 2.5 0 0 0-3.536 3.536l1.483 1.482H5A2.75 2.75 0 0 1 2.25 20V5.5A2.75 2.75 0 0 1 5 2.75zm1.54 6.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h3.429a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TaskDone_01;
