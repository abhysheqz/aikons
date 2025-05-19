import React from "react";
const KeyframeAlignHorizontal: React.FC<
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
        d="m15.259 11.335-2.545-2.999a.927.927 0 0 0-1.428 0L8.74 11.335c-.321.38-.321.95 0 1.33l2.545 2.999a.927.927 0 0 0 1.428 0l2.545-2.999c.322-.38.322-.95 0-1.33Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 12H2M22 12h-3"
      />
    </svg>
  );
};
export default KeyframeAlignHorizontal;
