import React from "react";
const Pan_03: React.FC<
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
        d="M22.125 11.875a4.75 4.75 0 0 1-4.75 4.75h-4a4.75 4.75 0 0 1-4.75-4.75v-1.75h13.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m7.582 7.668 2.5 2.5-1.414 1.414-2.5-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.213 3.713a2.006 2.006 0 0 1 2.837 0L7.537 6.2A2.006 2.006 0 1 1 4.7 9.037L2.213 6.55a2.006 2.006 0 0 1 0-2.837"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.375 18.875h-2v2h14v-2h-2v-1h-2v1h-2v-1h-2v1h-2v-1h-2zM11.375 7.875v-4h2v4zM14.875 7.875v-4h2v4zM18.375 7.875v-4h2v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pan_03;
