import React from "react";
const NotificationSnooze_02: React.FC<
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
        d="M18.5 11v3.307c0 1.627.99 3.089 2.5 3.693H3a3.98 3.98 0 0 0 2.5-3.693V9.5A6.5 6.5 0 0 1 13 3.076"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.016 2h3.672c.773 0 1.16 0 1.262.24s-.16.528-.685 1.104l-3.418 3.312c-.526.576-.934.864-.831 1.104s.634.24 1.407.24H21M14.5 21c-.644.619-1.527 1-2.5 1a3.6 3.6 0 0 1-2.5-1"
      />
    </svg>
  );
};
export default NotificationSnooze_02;
