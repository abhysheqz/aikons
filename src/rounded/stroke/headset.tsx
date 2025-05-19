import React from "react";
const Headset: React.FC<
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
        strokeWidth={1.5}
        d="M15 12a2 2 0 0 1 2-2 4 4 0 0 1 0 8 2 2 0 0 1-2-2zM9 12a2 2 0 0 0-2-2 4 4 0 0 0 0 8 2 2 0 0 0 2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 14v-3a9 9 0 0 1 18 0v4.846c0 2.009 0 3.013-.352 3.796a4 4 0 0 1-2.006 2.006c-.783.352-1.787.352-3.796.352H12"
      />
    </svg>
  );
};
export default Headset;
