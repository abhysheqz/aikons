import React from "react";
const CircleLockCheck_01: React.FC<
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
        d="M4.5 6.5a5.5 5.5 0 1 1 11 0v3a1 1 0 1 1-2 0v-3a3.5 3.5 0 1 0-7 0v3a1 1 0 1 1-2 0zM21.64 13.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.726 1.726 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10 7.25a7.75 7.75 0 1 0 4.065 14.35l-2.333-2.333a2.5 2.5 0 1 1 3.536-3.536l.564.565 1.862-2.234A7.75 7.75 0 0 0 10 7.25"
      />
    </svg>
  );
};
export default CircleLockCheck_01;
