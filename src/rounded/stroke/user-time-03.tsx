import React from "react";
const UserTime_03: React.FC<
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
        d="M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0M18.5 19l-1.5-.6V16m-4 2a4 4 0 1 0 8 0 4 4 0 0 0-8 0M10.5 20H5a2 2 0 0 1-2-2 5 5 0 0 1 5-5h4.5"
      />
    </svg>
  );
};
export default UserTime_03;
