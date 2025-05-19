import React from "react";
const FileAdd: React.FC<
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
        d="M8.25 1.252a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.268 8.502 3.25 19.816a2.925 2.925 0 0 0 2.917 2.936h6.803a.97.97 0 0 0 .686-.286l6.809-6.827a.98.98 0 0 0 .285-.692V4.184a2.924 2.924 0 0 0-2.917-2.932H10.5v2.75h1.75a2.25 2.25 0 0 1 0 4.5H10.5v1.75a2.25 2.25 0 0 1-4.5 0v-1.75zm9.3 12.294 6.236-6.255h-4.737a1.5 1.5 0 0 0-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileAdd;
