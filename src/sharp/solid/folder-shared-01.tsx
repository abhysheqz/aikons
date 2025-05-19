import React from "react";
const FolderShared_01: React.FC<
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
        d="M20.5 14.25a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14.25 21c0-2.175 2.015-3.75 4.25-3.75s4.25 1.575 4.25 3.75v.75h-8.5z"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5H13V21c0-2.148 1.377-3.751 3.144-4.511a3.25 3.25 0 1 1 5.606-2.239h1V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderShared_01;
