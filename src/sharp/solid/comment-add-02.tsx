import React from "react";
const CommentAdd_02: React.FC<
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
        d="M16.5 1.25H1.25v17.5h4v4l6.013-4H22.75V7.5H21v3h-4.5v-3h-3V3h3z"
      />
    </svg>
  );
};
export default CommentAdd_02;
