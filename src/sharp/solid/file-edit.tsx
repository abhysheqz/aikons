import React from "react";
const FileEdit: React.FC<
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
        d="M18.69 12.94 21.75 16 15 22.75h-3.06v-3.06z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m2.251 1.25-.001 21.5h8.44v-3.577l9.06-9.06V8.629L12.36 1.25zm9.311 1.955L17.8 9.46h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileEdit;
