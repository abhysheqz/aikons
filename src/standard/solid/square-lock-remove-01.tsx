import React from "react";
const SquareLockRemove_01: React.FC<
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
        fillRule="evenodd"
        d="M5.5 6.5a5.5 5.5 0 1 1 11 0V9a1 1 0 1 1-2 0V6.5a3.5 3.5 0 1 0-7 0V9a1 1 0 1 1-2 0zM13.293 14.293a1 1 0 0 1 1.414 0l2.793 2.793 2.793-2.793a1 1 0 0 1 1.414 1.414L18.914 18.5l2.793 2.793a1 1 0 0 1-1.414 1.414L17.5 19.914l-2.793 2.793a1 1 0 0 1-1.414-1.414l2.793-2.793-2.793-2.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5 8.25A2.75 2.75 0 0 0 2.25 11v9A2.75 2.75 0 0 0 5 22.75h6.615a2.5 2.5 0 0 1 .617-2.518l1.733-1.732-1.733-1.732a2.5 2.5 0 0 1 3.536-3.536l1.732 1.733 1.732-1.733q.24-.236.518-.398V11A2.75 2.75 0 0 0 17 8.25z"
      />
    </svg>
  );
};
export default SquareLockRemove_01;
