import React from "react";
const PathfinderMinusFront: React.FC<
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
        d="M18.5 9H20a2 2 0 0 1 2 2v.5m0 8v.5a2 2 0 0 1-2 2h-.5m-8 0H11a2 2 0 0 1-2-2v-1m5.5 3h2m5.5-7.5v2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5h-4a2 2 0 0 0-2 2z"
      />
    </svg>
  );
};
export default PathfinderMinusFront;
