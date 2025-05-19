import React from "react";
const Pipeline: React.FC<
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
        d="m20.637 7 2.639-4.75H.726L3.367 7zM19.526 9l-2.778 5H7.254L4.477 9zM8.365 16h7.272L12 22.544z"
      />
    </svg>
  );
};
export default Pipeline;
