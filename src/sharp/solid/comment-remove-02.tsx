import React from "react";
const CommentRemove_02: React.FC<
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
        d="m17.629 4.957-2.293-2.293L16.75 1.25l2.293 2.293 2.293-2.293 1.414 1.414-2.293 2.293L22.75 7.25l-1.414 1.414-2.293-2.293-2.293 2.293-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.983 1.25H1.25v17.5h4v4l6.013-4H22.75V9.018l-1.414 1.414-2.293-2.293-2.293 2.293-3.182-3.182 2.293-2.293-2.293-2.293z"
      />
    </svg>
  );
};
export default CommentRemove_02;
