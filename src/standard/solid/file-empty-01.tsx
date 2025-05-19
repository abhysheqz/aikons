import React from "react";
const FileEmpty_01: React.FC<
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
        d="M6.188 1.25A2.924 2.924 0 0 0 3.27 4.177l-.024 15.637a2.924 2.924 0 0 0 2.917 2.936h6.803a.97.97 0 0 0 .687-.285l6.808-6.828a.98.98 0 0 0 .285-.692V4.182A2.924 2.924 0 0 0 17.83 1.25zM18.8 14.54l-6.237 6.254V16.04a1.5 1.5 0 0 1 1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileEmpty_01;
