import React from "react";
const VideoReplay: React.FC<
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
        d="M4.5 3.5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h12a1 1 0 0 1 0 2h-12a3 3 0 0 1-3-3v-15a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v14a1 1 0 0 1-1.555.832l-3-2a1 1 0 0 1 1.11-1.664l1.445.963V4.5a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 9.869c0-1.598 1.78-2.55 3.11-1.665l3.197 2.132a2 2 0 0 1 0 3.328l-3.198 2.132c-1.329.886-3.109-.067-3.109-1.664z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VideoReplay;
