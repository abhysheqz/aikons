import React from "react";
const FileShredder: React.FC<
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
        d="M22 12.999H2M20 13.001v-4l-7-7H4v11m9-10.5v6.5h6.5M6 15.999v1m4-1v6m4-6v2m4-2v4"
      />
    </svg>
  );
};
export default FileShredder;
