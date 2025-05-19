import React from "react";
const Task_02: React.FC<
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
        d="m15.383 1.25-.48 2.792a.25.25 0 0 1-.246.208H9.348a.25.25 0 0 1-.247-.21l-.46-2.79z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5 1.25h-1.593l-.524 3.046A1.75 1.75 0 0 1 14.66 5.75h-5.31a1.75 1.75 0 0 1-1.726-1.465l-.5-3.035H5.5A2.75 2.75 0 0 0 2.75 4v16a2.75 2.75 0 0 0 2.75 2.75h13A2.75 2.75 0 0 0 21.25 20V4a2.75 2.75 0 0 0-2.75-2.75m-10.5 9a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h3.429a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Task_02;
