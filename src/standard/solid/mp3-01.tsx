import React from "react";
const Mp3_01: React.FC<
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
        d="M6.17 1.25c-1.612-.002-2.92 1.29-2.92 2.885v8.653c0 .531.435.962.972.962h15.556a.98.98 0 0 0 .687-.282.96.96 0 0 0 .285-.68V8.941c0-.255-.103-.5-.285-.68l-6.81-6.723a.98.98 0 0 0-.686-.28zm6.396 1.93 6.24 6.16h-4.74a1.5 1.5 0 0 1-1.5-1.5zM4.624 15.585A.75.75 0 0 0 3.25 16v6a.75.75 0 0 0 1.5 0v-3.523l.626.94a.75.75 0 0 0 1.248 0l.626-.94V22a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.374-.416L6 17.648zm5.876-.334a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-1.75h1a2.5 2.5 0 0 0 0-5zm1.75 3.5h-1v-2h1a1 1 0 1 1 0 2m4.25-3.5a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-.25h2v1.5H18a.75.75 0 1 0 0 1.5h1.25v1.5h-2V21a.75.75 0 1 0-1.5 0v1c0 .414.336.75.75.75H20a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mp3_01;
