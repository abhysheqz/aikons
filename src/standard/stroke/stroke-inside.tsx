import React from "react";
const StrokeInside: React.FC<
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
        d="M11.5 22H21a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-9a1 1 0 0 1-1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};
export default StrokeInside;
