import React from "react";
const VideoConsole: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 2H3v20h18z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11 19-2-2m0 0-2-2m2 2-2 2m2-2 2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.991 15.5h.01M15 18.5h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12h18"
      />
    </svg>
  );
};
export default VideoConsole;
