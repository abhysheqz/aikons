import React from "react";
const CameraVideo: React.FC<
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
        d="M8.874 16.634a1 1 0 0 0-1.207.159l-4 4a1 1 0 1 0 1.414 1.414l3.293-3.293V22.5a1 1 0 1 0 2 0v-3.586l3.293 3.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.207-.16 1 1 0 0 0-1 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.124 9.5a2.75 2.75 0 0 1 2.75-2.75h11a2.75 2.75 0 0 1 2.75 2.75v6a2.75 2.75 0 0 1-2.75 2.75h-11a2.75 2.75 0 0 1-2.75-2.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.982 7.829a2 2 0 0 1 2.894 1.789v5.764a2 2 0 0 1-2.894 1.789l-3.553-1.777.894-1.789 3.553 1.777V9.618l-3.553 1.776-.894-1.789zM11.874 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.874 2.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraVideo;
