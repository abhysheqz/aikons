import React from "react";
const CommentBlock_02: React.FC<
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
        d="M2 2v-.75h-.75V2zm20 16v.75h.75V18zM2 18h-.75v.75H2zm4 4h-.75a.75.75 0 0 0 1.219.586zm0-4h.75v-.75H6zm5 0v-.75h-.263l-.206.164zM1.25 2v16h1.5V2zM2 18.75h4v-1.5H2zM6.75 22v-4h-1.5v4zM11 18.75h11v-1.5H11zm-4.531 3.836 5-4-.937-1.172-5 4zM2 2.75h10v-1.5H2zM21.25 12v6h1.5v-6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m15.2 3.2 5.6 5.6M22 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
      />
    </svg>
  );
};
export default CommentBlock_02;
