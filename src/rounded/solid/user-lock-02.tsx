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
        d="M4.25 8a5.25 5.25 0 1 1 7.005 4.95 7.75 7.75 0 0 1 5.995 7.55.75.75 0 0 1-.75.75h-14a.75.75 0 0 1-.75-.75 7.75 7.75 0 0 1 5.995-7.55A5.25 5.25 0 0 1 4.25 8"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.25 9.418V8.5a2.25 2.25 0 0 0-4.5 0v.918c-.591.281-1 .884-1 1.582v2c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 22.25 13v-2c0-.698-.409-1.3-1-1.582m-3-.918a.75.75 0 0 1 1.5 0v.75h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserLock_02;
