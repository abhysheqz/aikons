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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 21.5V15h6.5M14 2h6v13l-7 7H4v-8"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M10 2H4v8l3-2 3 2z" />
    </svg>
  );
};
export default FileBookmark;
