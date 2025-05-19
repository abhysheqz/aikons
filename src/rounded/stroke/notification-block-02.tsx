import React from "react";
const NotificationBlock_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 11.5v2.807c0 1.627.99 3.089 2.5 3.693H3a3.98 3.98 0 0 0 2.5-3.693V9.5A6.5 6.5 0 0 1 12 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.05 3.05 4.9 4.9M21 5.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0M14.5 21c-.644.619-1.527 1-2.5 1a3.6 3.6 0 0 1-2.5-1"
      />
    </svg>
  );
};
export default NotificationBlock_02;
