import React from "react";
const FileBookmark: React.FC<
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
        d="M3.25 2A.75.75 0 0 1 4 1.25h6a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.166.624L7 8.901l-2.584 1.723A.75.75 0 0 1 3.25 10z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.262 11.859-.012 7.955a2.924 2.924 0 0 0 2.917 2.936h6.803a.97.97 0 0 0 .686-.285l6.809-6.828a.98.98 0 0 0 .285-.692V4.182a2.924 2.924 0 0 0-2.917-2.932H12V10a2 2 0 0 1-3.11 1.664L7 10.404l-1.89 1.26a2 2 0 0 1-1.848.195m9.305 8.935 6.237-6.255h-4.737a1.5 1.5 0 0 0-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileBookmark;
