import React from "react";
const GoBackwardSec_10: React.FC<
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
        d="m12 5-2-2.8q.97-.198 2-.2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4-8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.005 16.262V9.601a.1.1 0 0 0-.163-.078l-1.852 1.49m5.13 4.503h3.258a.1.1 0 0 0 .1-.1V9.61a.1.1 0 0 0-.1-.1H12.12a.1.1 0 0 0-.1.1v5.806a.1.1 0 0 0 .1.1Z"
      />
    </svg>
  );
};
export default GoBackwardSec_10;
