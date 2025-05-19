import React from "react";
const Archive: React.FC<
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
        d="M21 2H3v20h18z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21 12H3M15 7H9M15 17H9"
      />
    </svg>
  );
};
export default Archive;
