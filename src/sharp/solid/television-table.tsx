import React from "react";
const TelevisionTable: React.FC<
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
        d="M11.25 22.75H3a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 .75-.75h8.25zm-2.75-4h-2v-1.5h2zM12.75 13.25v9.5H21a.75.75 0 0 0 .75-.75v-8a.75.75 0 0 0-.75-.75zm2.75 5.5h2v-1.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.25 2A.75.75 0 0 1 6 1.25h12a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M9.75 11a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default TelevisionTable;
