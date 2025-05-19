import React from "react";
const KeyframeRight: React.FC<
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
        d="M21 21V3m0 9h-3.5M3.36 12.796a1.062 1.062 0 0 1 0-1.592L7.761 7.28a1.113 1.113 0 0 1 1.476 0l4.403 3.924a1.062 1.062 0 0 1 0 1.592L9.238 16.72a1.113 1.113 0 0 1-1.476 0z"
      />
    </svg>
  );
};
export default KeyframeRight;
