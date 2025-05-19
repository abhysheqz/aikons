import React from "react";
const NotificationSquare: React.FC<
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
      <path fill="currentColor" d="M14.75 5.25a4 4 0 1 1 8 0 4 4 0 0 1-8 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 12.557c0 2.19 0 3.912-.18 5.255-.186 1.377-.573 2.469-1.43 3.327-.86.858-1.951 1.245-3.328 1.43-1.343.181-3.064.181-5.255.181h-.114c-2.19 0-3.912 0-5.255-.18-1.377-.186-2.469-.573-3.327-1.43-.858-.86-1.245-1.951-1.43-3.328-.181-1.343-.181-3.064-.181-5.255v-.114c0-2.19 0-3.912.18-5.255.186-1.377.573-2.469 1.43-3.327.86-.858 1.951-1.245 3.328-1.43 1.343-.181 3.064-.181 5.255-.181h1.22c.616 0 .924 0 1.044.164s.014.498-.199 1.166a5.5 5.5 0 0 0 6.931 6.906c.652-.21.979-.316 1.143-.196.164.119.165.419.167 1.019l.001 1.134zM6.25 11a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M7 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotificationSquare;
