import React from "react";
const AlignBoxTopCenter: React.FC<
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
        d="M5 22a2 2 0 0 1-2-2V4.002a2 2 0 0 1 2.002-2l13 .01a2 2 0 0 1 1.998 2V20a2 2 0 0 1-2 2zM15.5 7h-8m5.778 5H9.722"
      />
    </svg>
  );
};
export default AlignBoxTopCenter;
