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
        d="m18.5 19-1.5-.6V16m-4 2a4 4 0 1 0 8 0 4 4 0 0 0-8 0M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12 13H8a5 5 0 0 0-5 5v1a1 1 0 0 0 1 1h6"
      />
    </svg>
  );
};
export default UserTime_03;
