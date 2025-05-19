import React from "react";
const CommentBlock_01: React.FC<
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
        d="M12 6a5.99 5.99 0 0 1 2.334-4.75H1.25v17.5h4v4l6.013-4H22.75V9.666A6 6 0 0 1 12 6m-5 5.75v1.5h6v-1.5zm0-3.5h3v-1.5H7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m2.178-1.229a2.85 2.85 0 0 0 3.8 3.801zm1.343-1.343 3.801 3.8a2.85 2.85 0 0 0-3.8-3.801"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CommentBlock_01;
