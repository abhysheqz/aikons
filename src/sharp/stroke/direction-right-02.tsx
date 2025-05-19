import React from "react";
const DirectionRight_02: React.FC<
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
        d="M10 12v9M10 3v2M6 21h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.98 11.99 6.013 12a.01.01 0 0 1-.01-.01V4.992a.01.01 0 0 1 .01-.01l8.954-.01 3.031 3.525z"
      />
    </svg>
  );
};
export default DirectionRight_02;
