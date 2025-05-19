import React from "react";
const FileAudio: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 11V9l-7-7H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 2v5a2 2 0 0 0 2 2h5M16 16.5h-2.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16l4 2.5v-8z"
      />
    </svg>
  );
};
export default FileAudio;
