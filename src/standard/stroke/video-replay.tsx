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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 21.5h-12a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v14l-3-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 14.132V9.869a1 1 0 0 1 1.555-.833l3.197 2.132a1 1 0 0 1 0 1.664l-3.197 2.131a1 1 0 0 1-1.555-.831Z"
      />
    </svg>
  );
};
export default VideoReplay;
