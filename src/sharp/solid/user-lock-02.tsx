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
        fill="currentColor"
        d="M7.745 12.95A7.75 7.75 0 0 0 1.75 20.5v.75h15.5v-.75a7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 9.5 2.75a5.25 5.25 0 0 0-1.755 10.2"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.25 9.25V8.5a2.25 2.25 0 0 0-4.5 0v.75h-1v5.5h6.5v-5.5zm-3-.75a.75.75 0 0 1 1.5 0v.75h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserLock_02;
