import React from "react";
const Hotel_01: React.FC<
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
        d="M22 5v16a2 2 0 0 1-2 2h-4.993v-4.999a3.001 3.001 0 0 0-6.002 0V23H4a2 2 0 0 1-2-2V5a1 1 0 0 1 0-2h5.494C8.704 1.5 10.341 1 12 1s3.295.5 4.506 2H22a1 1 0 1 1 0 2m-8.993 13.001V23h-2.002v-4.999a1.001 1.001 0 1 1 2.002 0M11.25 8a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-1.25h1.5V12a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v1.25h-1.5zm-6 0A.75.75 0 0 1 6 7.25h1a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m0 4a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M17 7.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hotel_01;
