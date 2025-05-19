import React from "react";
const FileUpload: React.FC<
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
        d="M6.543 1.543a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L8.25 4.664v5.586a1 1 0 1 1-2 0V4.664L4.957 5.957a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.27 7.276-.02 12.538a2.924 2.924 0 0 0 2.917 2.936h6.803a.97.97 0 0 0 .686-.285l6.809-6.828a.98.98 0 0 0 .285-.692V4.182a2.924 2.924 0 0 0-2.917-2.932H9.432l2.409 2.409A2.25 2.25 0 0 1 9.5 7.372v2.878a2.25 2.25 0 0 1-4.5 0V7.372a2.26 2.26 0 0 1-1.73-.096m9.297 13.518 6.237-6.255h-4.737a1.5 1.5 0 0 0-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileUpload;
