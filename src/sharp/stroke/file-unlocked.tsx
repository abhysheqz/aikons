import React from "react";
const FileUnlocked: React.FC<
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
        d="M14.75 16.5v-1.75a1.75 1.75 0 0 1 3.16-1.038M20 16.5h-7V22h7z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 2.5V9h6.5m.5 2V9l-7-7H4v20h5"
      />
    </svg>
  );
};
export default FileUnlocked;
