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
        fill="currentColor"
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336z"
      />
      <path
        fill="currentColor"
        d="M2 3.25a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-2.25L3.25 3.25zM22.75 6.711a.97.97 0 0 0-.467-.836.89.89 0 0 0-.928.012L17.75 8.145V4a.75.75 0 0 0-.75-.75H6.785L17.75 14.214v-3.826l3.158-1.978v8.962l1.842 1.842z"
      />
    </svg>
  );
};
export default VideoOff;
