import React from "react";
const BubbleChatEdit: React.FC<
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
        strokeWidth={2}
        d="M11.993 12h.009m-4.006 0h.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10-1.576 0-2.941-.402-4.224-1.064-.504-.26-1.085-.343-1.628-.18l-2.369.71a1 1 0 0 1-1.245-1.245l.71-2.369c.163-.542.08-1.124-.18-1.627C2.402 14.94 2 13.575 2 12 2 6.477 6.477 2 12 2q.507 0 1 .05"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 7.5V10h2.5L22 4.5 19.5 2z"
      />
    </svg>
  );
};
export default BubbleChatEdit;
