import React from "react";
const FileVideo: React.FC<
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
        d="M12 2.5V9h6.5m.5 4V9l-7-7H3v20h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18 19.5v-1m0 1V22h-6v-6h6v2.5m0 1 2.5 1.5h.5v-4h-.5L18 18.5"
      />
    </svg>
  );
};
export default FileVideo;
