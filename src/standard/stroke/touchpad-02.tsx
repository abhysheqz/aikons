import React from "react";
const Touchpad_02: React.FC<
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
        d="M10.853 13.644 12.5 15V7a1.5 1.5 0 0 1 3 0v5H19a2.5 2.5 0 0 1 2.5 2.5V19a2.5 2.5 0 0 1-2.5 2.5h-4.851a2 2 0 0 1-1.606-.807L8.82 15.68a1.496 1.496 0 0 1-.007-1.839 1.4 1.4 0 0 1 2.04-.197Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 9V4.5a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2v9.998a2 2 0 0 0 2 2H5"
      />
    </svg>
  );
};
export default Touchpad_02;
