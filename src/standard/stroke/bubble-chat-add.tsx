import React from "react";
const BubbleChatAdd: React.FC<
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
        d="M22 5.5h-7M18.5 2v7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.996 12h.008m3.987 0H16m-8 0h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10-1.576 0-2.941-.402-4.225-1.064-.503-.26-1.085-.343-1.627-.18l-2.37.71a1 1 0 0 1-1.244-1.245l.71-2.369c.163-.542.08-1.124-.18-1.627C2.402 14.94 2 13.575 2 12 2 6.477 6.477 2 12 2"
      />
    </svg>
  );
};
export default BubbleChatAdd;
