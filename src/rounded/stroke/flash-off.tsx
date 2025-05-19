import React from "react";
const FlashOff: React.FC<
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
        d="m16 16-4.333 5.654c-.539.702-1.548.265-1.548-.671V14.03c0-.56-.396-1.015-.884-1.015h-3.35c-.76 0-1.165-1.03-.663-1.686L7.774 8M10 5.727l2.497-3.377c.525-.71 1.51-.268 1.51.678v7.031c0 .567.386 1.026.862 1.026h3.267c.742 0 1.138 1.042.647 1.705L17.888 14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m2 2 20 20"
      />
    </svg>
  );
};
export default FlashOff;
