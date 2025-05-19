import React from "react";
const Grid_02: React.FC<
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
        d="M18 3a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v8h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H7v2a1 1 0 1 1-2 0v-2H3a1 1 0 1 1 0-2h2V8H3a1 1 0 0 1 0-2h2V4a1 1 0 0 1 2 0v2h10V4a1 1 0 0 1 1-1M7 16h10V8H7z"
      />
    </svg>
  );
};
export default Grid_02;
