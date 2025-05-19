import React from "react";
const Doctor_01: React.FC<
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
        d="M20 22v-7a2 2 0 0 0-2-2h-4l-2 2-2-2H6a2 2 0 0 0-2 2v7M16 13v5.5M15.5 6.5v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.75 19.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 13v4m0 0a2 2 0 0 1 2 2v1m-2-3a2 2 0 0 0-2 2v1"
      />
    </svg>
  );
};
export default Doctor_01;
