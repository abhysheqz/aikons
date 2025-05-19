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
        d="M14.334 1.25a6 6 0 1 0 8.416 8.416v9.084H11.263l-6.013 4v-4h-4V1.25z"
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
export default CommentBlock_02;
