import React from "react";
const PathfinderMinusBack: React.FC<
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
        d="M5.5 15H4a2 2 0 0 1-2-2v-.5m0-8V4a2 2 0 0 1 2-2h.5m8 0h.5a2 2 0 0 1 2 2v1M9.5 2h-2M2 9.5v-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 9h5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-5h4a2 2 0 0 0 2-2z"
      />
    </svg>
  );
};
export default PathfinderMinusBack;
