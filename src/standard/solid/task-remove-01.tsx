import React from "react";
const TaskRemove_01: React.FC<
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
        d="M6.75 3c0-.966.784-1.75 1.75-1.75h5a1.75 1.75 0 1 1 0 3.5h-5A1.75 1.75 0 0 1 6.75 3M14.793 15.293a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 1.414L19.914 19l2.293 2.293a1 1 0 0 1-1.414 1.414L18.5 20.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.086 19l-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.46 2.75a3.05 3.05 0 0 0 3.04 3.3h5a3.05 3.05 0 0 0 3.04-3.3h.96a2.75 2.75 0 0 1 2.75 2.75v8.334q-.28.16-.518.398L18.5 15.465l-1.232-1.233a2.5 2.5 0 0 0-3.536 3.536L14.965 19l-1.233 1.232a2.5 2.5 0 0 0-.617 2.518H4.5A2.75 2.75 0 0 1 1.75 20V5.5A2.75 2.75 0 0 1 4.5 2.75zM7 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h3.429a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TaskRemove_01;
