import React from "react";
const UserGroup: React.FC<
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
        d="M8.25 10.5a3.75 3.75 0 1 1 5.281 3.424c2.674.623 4.719 2.838 4.719 5.575a.75.75 0 0 1-.75.75h-11a.75.75 0 0 1-.75-.75c0-2.737 2.045-4.952 4.719-5.575a3.75 3.75 0 0 1-2.22-3.424"
      />
      <path
        fill="currentColor"
        d="M7.5 3.748a3.75 3.75 0 0 0-1.531 7.174c-2.674.623-4.719 2.838-4.719 5.575 0 .414.336.75.75.75h2.625c.547-1.58 1.653-2.887 3.054-3.766a5.252 5.252 0 0 1 2.949-8.052A3.75 3.75 0 0 0 7.5 3.748M19.375 17.247c-.547-1.58-1.653-2.887-3.054-3.766a5.252 5.252 0 0 0-2.949-8.051 3.75 3.75 0 1 1 4.66 5.493c2.673.622 4.718 2.836 4.718 5.574a.75.75 0 0 1-.75.75z"
      />
    </svg>
  );
};
export default UserGroup;
