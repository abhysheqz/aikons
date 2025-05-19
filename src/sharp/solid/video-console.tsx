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
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 2A.75.75 0 0 1 3 1.25h18a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v8.5h16.5v-8.5zM7.938 17l-1.47 1.47 1.061 1.06L9 18.06l1.47 1.47 1.06-1.06L10.06 17l1.47-1.47-1.06-1.06-1.47 1.47-1.47-1.47-1.06 1.06zm9.053-2.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM15 17.5a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VideoConsole;
