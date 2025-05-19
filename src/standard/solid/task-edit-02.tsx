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
        fill="currentColor"
        d="m14.383 1.25-.48 2.792a.25.25 0 0 1-.246.208H8.348a.25.25 0 0 1-.247-.21l-.46-2.79z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.47 13.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-.53.22h-2.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .22-.53zM9.5 21.25h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.907 1.25H17.5A2.75 2.75 0 0 1 20.25 4v8.129a2.25 2.25 0 0 0-2.841.28l-5.5 5.5a2.25 2.25 0 0 0-.659 1.591v.378a2.3 2.3 0 0 0-.75-.128h-1a2.25 2.25 0 0 0-2.122 3H4.5A2.75 2.75 0 0 1 1.75 20V4A2.75 2.75 0 0 1 4.5 1.25h1.622l.501 3.035A1.75 1.75 0 0 0 8.35 5.75h5.309a1.75 1.75 0 0 0 1.724-1.454zM7 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h3.429a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TaskEdit_02;
