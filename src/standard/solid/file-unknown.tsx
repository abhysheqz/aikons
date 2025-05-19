import React from "react";
const FileUnknown: React.FC<
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
        d="M6.25 3.25a1 1 0 0 0-1 1 1 1 0 0 1-2 0 3 3 0 0 1 3-3c1.56 0 3 1.193 3 2.919 0 .576-.17 1.14-.49 1.62L7.637 7.472A2.3 2.3 0 0 0 7.25 8.75a1 1 0 0 1-2 0c0-.85.251-1.68.723-2.387L7.096 4.68a.9.9 0 0 0 .154-.51c0-.493-.411-.919-1-.919m0 8a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.257 15-.007 4.814a2.924 2.924 0 0 0 2.917 2.936h6.803a.97.97 0 0 0 .686-.285l6.809-6.828a.98.98 0 0 0 .285-.692V4.182a2.924 2.924 0 0 0-2.917-2.932H9.294A4.04 4.04 0 0 1 10.5 4.169c0 .823-.244 1.628-.7 2.313L8.677 8.166a1.05 1.05 0 0 0-.177.584c0 .707-.326 1.338-.836 1.75.51.412.836 1.043.836 1.75v.5A2.25 2.25 0 0 1 6.25 15zm9.31 5.794 6.237-6.255h-4.737a1.5 1.5 0 0 0-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileUnknown;
