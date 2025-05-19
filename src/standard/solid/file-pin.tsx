import React from "react";
const FilePin: React.FC<
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
        d="M14.42 13.525a.75.75 0 0 1 .58-.275h4a.75.75 0 0 1 .735.897l-.443 2.216 1.351 2.251A.75.75 0 0 1 20 19.75h-2.25V22a.75.75 0 0 1-1.5 0v-2.25H14a.75.75 0 0 1-.643-1.136l1.35-2.251-.442-2.216a.75.75 0 0 1 .155-.623"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.191 22.75a2.924 2.924 0 0 1-2.917-2.927L3.25 4.186A2.924 2.924 0 0 1 6.167 1.25h6.803a.97.97 0 0 1 .686.286l6.809 6.827a.98.98 0 0 1 .285.692V12H15a2 2 0 0 0-1.961 2.392l.348 1.742-1.102 1.837A2 2 0 0 0 14 21h1v1.75zM18.804 9.461l-6.237-6.255v4.755a1.5 1.5 0 0 0 1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FilePin;
