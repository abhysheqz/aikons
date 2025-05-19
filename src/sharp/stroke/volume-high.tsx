import React from "react";
const VolumeHigh: React.FC<
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
        d="M17 9c.625.82 1 1.863 1 3s-.375 2.18-1 3M20 7c1.25 1.366 2 3.106 2 5s-.75 3.634-2 5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.068 15.52 4.938-.028 6.96 4.504c.067.044.044-.048.044-.127V4.143c0-.08.023-.171-.043-.127L7.006 8.52l-4.938-.028c-.055 0-.07.043-.07.098v6.831c0 .056.015.099.07.099Z"
      />
    </svg>
  );
};
export default VolumeHigh;
