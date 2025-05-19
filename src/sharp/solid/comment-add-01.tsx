import React from "react";
const CommentAdd_01: React.FC<
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
        fillRule="evenodd"
        d="M17.75 4.25v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 1.25H16.5V3h-3v4.5h3v3H21v-3h1.75v11.25H11.263l-6.013 4v-4h-4zM8 11.75v1.5h6v-1.5zm0-3.5h3v-1.5H8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CommentAdd_01;
