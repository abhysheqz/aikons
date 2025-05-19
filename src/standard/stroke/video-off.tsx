import React from "react";
const VideoOff: React.FC<
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
        strokeWidth={1.5}
        d="m2 2 20 20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 14V6.5a2 2 0 0 0-2-2H8.5M4 4.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 1.937-1.5M22 17V6.5L18 9"
      />
    </svg>
  );
};
export default VideoOff;
