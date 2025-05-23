import React from "react";
const BubbleChatPreview: React.FC<
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
        d="M21.8 10q.198.97.2 2c0 5.523-4.477 10-10 10-1.576 0-2.941-.402-4.224-1.064-.504-.26-1.085-.343-1.628-.18l-2.369.71a1 1 0 0 1-1.245-1.245l.71-2.369c.163-.542.08-1.124-.18-1.627C2.402 14.94 2 13.575 2 12 2 6.987 5.69 2.724 10.5 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 8C19.985 8 22 5 22 5s-2.015-3-4.5-3S13 5 13 5s2.015 3 4.5 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.5 5h.01M11.996 12h.009M8 12h.01m7.986 0h.009"
      />
    </svg>
  );
};
export default BubbleChatPreview;
