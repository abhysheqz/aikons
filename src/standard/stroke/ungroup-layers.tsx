import React from "react";
const UngroupLayers: React.FC<
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
        d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.515 7.809 3.699 2.22a.55.55 0 0 1 0 .943l-3.7 2.22a1 1 0 0 1-1.028 0l-3.7-2.22a.55.55 0 0 1 0-.944l3.7-2.22a1 1 0 0 1 1.028 0M17 13.5l-4.485 2.691a1 1 0 0 1-1.03 0L7 13.5"
      />
    </svg>
  );
};
export default UngroupLayers;
