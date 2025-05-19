import React from "react";
const UserRoadside: React.FC<
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
        d="M15.25 4.55c0 .89-.35 1.703-.92 2.3 2.02.912 3.42 2.971 3.42 5.35v1.7a.75.75 0 0 1-.75.75h-1.495l-1.11 4.528a.75.75 0 0 1-.728.572h-3.334a.75.75 0 0 1-.728-.572l-1.11-4.528H7a.75.75 0 0 1-.75-.75v-1.7c0-2.379 1.4-4.438 3.42-5.35a3.32 3.32 0 0 1-.92-2.3c0-1.808 1.441-3.3 3.25-3.3s3.25 1.492 3.25 3.3"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 16.25h2v2H5zM11 22.75v-2h2v2zM17 16.25h2v2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserRoadside;
