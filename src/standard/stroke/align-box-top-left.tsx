import React from "react";
const AlignBoxTopLeft: React.FC<
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
        d="M5 22a2 2 0 0 1-2-2V4.002a2 2 0 0 1 2.002-2l13 .01a2 2 0 0 1 1.998 2V20a2 2 0 0 1-2 2zM14.5 7h-8m3.556 5H6.5"
      />
    </svg>
  );
};
export default AlignBoxTopLeft;
