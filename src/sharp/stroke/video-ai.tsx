import React from "react";
const VideoAi: React.FC<
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
        strokeWidth={1.5}
        d="M9 7v8h.5l6.5-3.75v-.5L9.5 7z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 19H2V3h20v10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18.974 15A3.82 3.82 0 0 1 16 17.974v.052A3.82 3.82 0 0 1 18.974 21h.052A3.82 3.82 0 0 1 22 18.026v-.052A3.82 3.82 0 0 1 19.026 15z"
      />
    </svg>
  );
};
export default VideoAi;
