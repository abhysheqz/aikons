import React from "react";
const BubbleChatBlocked: React.FC<
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
        d="M19 19.141A9.97 9.97 0 0 1 12 22c-1.576 0-2.941-.402-4.225-1.064-.503-.26-1.085-.343-1.627-.18l-2.37.71a1 1 0 0 1-1.244-1.245l.71-2.369c.163-.542.08-1.124-.18-1.627C2.402 14.94 2 13.575 2 12a9.97 9.97 0 0 1 2.859-7M7.5 3.067A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10a9.96 9.96 0 0 1-1 4.364M2 2l20 20"
      />
    </svg>
  );
};
export default BubbleChatBlocked;
