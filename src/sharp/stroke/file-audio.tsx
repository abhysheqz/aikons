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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 2.5V9h6.5m.5 2V9l-7-7H4v20h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 22v-8h-.5l-3 2H13v4h3.5l3 2z"
      />
    </svg>
  );
};
export default FileAudio;
