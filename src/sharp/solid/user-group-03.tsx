import React from "react";
const UserGroup_03: React.FC<
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
        d="M8.25 8a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M5.25 18A4.75 4.75 0 0 1 10 13.25h4A4.75 4.75 0 0 1 18.75 18v2.75H5.25z"
      />
      <path
        fill="currentColor"
        d="M9.605 3.61a5 5 0 0 0-1.784 7.136A3.75 3.75 0 1 1 9.605 3.61M8.28 12.25A6 6 0 0 0 4 18v1.75H1.25V17A4.75 4.75 0 0 1 6 12.25zM20 19.75h2.75V17A4.75 4.75 0 0 0 18 12.25h-2.28A6 6 0 0 1 20 18zM16.18 10.746a3.75 3.75 0 1 0-1.785-7.136 5 5 0 0 1 1.784 7.136"
      />
    </svg>
  );
};
export default UserGroup_03;
