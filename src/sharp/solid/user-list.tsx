import React from "react";
const UserList: React.FC<
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
        d="M3.75 8a5.25 5.25 0 1 1 7.005 4.95 7.75 7.75 0 0 1 5.995 7.55v.75H1.25v-.75a7.75 7.75 0 0 1 5.995-7.55A5.25 5.25 0 0 1 3.75 8M15.75 8.5h7v2h-7z"
      />
      <path fill="currentColor" d="M15.75 12h7v2h-7zM18.75 15.5h4v2h-4z" />
    </svg>
  );
};
export default UserList;
