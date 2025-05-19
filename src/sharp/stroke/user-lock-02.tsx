import React from "react";
const UserLock_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14.5 8.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.5 20.5a7 7 0 1 0-14 0M17.5 10V8.5a1.5 1.5 0 0 1 3 0V10m-4 0h5v4h-5z"
      />
    </svg>
  );
};
export default UserLock_02;
