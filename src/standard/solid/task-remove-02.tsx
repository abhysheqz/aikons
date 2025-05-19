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
        d="m14.383 1.25-.48 2.792a.25.25 0 0 1-.246.208H8.348a.25.25 0 0 1-.247-.21l-.46-2.79z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.793 15.293a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 1.414L19.914 19l2.293 2.293a1 1 0 0 1-1.414 1.414L18.5 20.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.086 19l-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.907 1.25H17.5A2.75 2.75 0 0 1 20.25 4v9.834q-.28.16-.518.398L18.5 15.465l-1.232-1.233a2.5 2.5 0 0 0-3.536 3.536L14.965 19l-1.233 1.232a2.5 2.5 0 0 0-.617 2.518H4.5A2.75 2.75 0 0 1 1.75 20V4A2.75 2.75 0 0 1 4.5 1.25h1.622l.501 3.035A1.75 1.75 0 0 0 8.35 5.75h5.309a1.75 1.75 0 0 0 1.724-1.454zM7 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h3.429a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TaskRemove_02;
