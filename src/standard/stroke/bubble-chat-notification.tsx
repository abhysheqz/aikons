import React from "react";
const BubbleChatNotification: React.FC<
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
        strokeWidth={1.5}
        d="M22 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.995 12h.01m3.986 0H16m-8 0h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10-1.576 0-2.941-.402-4.225-1.064-.503-.26-1.085-.343-1.627-.18l-2.37.71a1 1 0 0 1-1.244-1.245l.71-2.37c.163-.542.08-1.123-.18-1.627C2.402 14.941 2 13.576 2 12 2 6.477 6.477 2 12 2q.506 0 1 .05"
      />
    </svg>
  );
};
export default BubbleChatNotification;
