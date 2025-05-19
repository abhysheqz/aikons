import React from "react";
const CommentRemove_01: React.FC<
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
        d="m17.629 5.957-2.293-2.293L16.75 2.25l2.293 2.293 2.293-2.293 1.414 1.414-2.293 2.293L22.75 8.25l-1.414 1.414-2.293-2.293-2.293 2.293-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 2.25h13.733l-1.415 1.414 2.293 2.293-2.293 2.293 3.182 3.182 2.293-2.293 2.293 2.293 1.414-1.414v9.732H11.263l-6.013 4v-4h-4zm6.75 12h7v-1.5H8zm0-5h4v-1.5H8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CommentRemove_01;
