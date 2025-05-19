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
        d="m2.002 2 19.975 20M16.852 16.868c-.13.938-.386 1.599-.893 2.106C14.937 20 13.289 20 9.993 20h-.999c-3.296 0-4.943 0-5.967-1.026C2.002 17.95 2.002 16.3 2.002 13v-2c0-3.3 0-4.95 1.024-5.975.342-.343.755-.571 1.275-.723"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.236 4h1.755c3.296 0 4.944 0 5.967 1.025C16.982 6.05 16.982 7.7 16.982 11v1.757m0-3.526 2.32-1.702c1.47-.988 2.147-.357 2.365.12.452 1.279.31 3.744.31 6.893-.107 2.013-.382 2.23-.663 2.452l-.003.002"
      />
    </svg>
  );
};
export default VideoOff;
