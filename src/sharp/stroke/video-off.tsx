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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.993 9.5 4.998-3V17"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m2 2 19.99 20" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.045 4h-2.05v16.02h14.998V4H6.672"
      />
    </svg>
  );
};
export default VideoOff;
