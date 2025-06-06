import React from "react";
const BubbleChatFavourite: React.FC<
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
        d="M20.743 2.29C19.147 1.457 18 2.684 18 2.684s-1.146-1.227-2.743-.394C13.323 3.298 13.184 7.247 18 9c4.816-1.753 4.677-5.702 2.743-6.71"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.746 12h.008m3.987 0h.009m-8 0h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10-1.576 0-2.941-.402-4.225-1.064-.503-.26-1.085-.343-1.627-.18l-2.37.71a1 1 0 0 1-1.244-1.245l.71-2.369c.163-.542.08-1.124-.18-1.627C2.402 14.94 2 13.575 2 12c0-5.185 3.947-9.498 9-10"
      />
    </svg>
  );
};
export default BubbleChatFavourite;
