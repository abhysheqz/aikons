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
        fill="currentColor"
        d="m14.883 1.25-.48 2.792a.25.25 0 0 1-.246.208H8.848a.25.25 0 0 1-.247-.21l-.46-2.79z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.64 15.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.726 1.726 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.407 1.25H18A2.75 2.75 0 0 1 20.75 4v9.513a2.5 2.5 0 0 0-1.67.886l-3.248 3.898-.564-.565a2.5 2.5 0 0 0-3.536 3.536l1.483 1.482H5A2.75 2.75 0 0 1 2.25 20V4A2.75 2.75 0 0 1 5 1.25h1.622l.501 3.035A1.75 1.75 0 0 0 8.85 5.75h5.309a1.75 1.75 0 0 0 1.724-1.454zm-8.907 8a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h3.429a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TaskDone_02;
