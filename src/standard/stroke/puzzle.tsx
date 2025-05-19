import React from "react";
const Puzzle: React.FC<
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
        d="M10 2a3 3 0 0 0-3 3v1H3a1 1 0 0 0-1 1v4h1a3 3 0 1 1 0 6H2v4a1 1 0 0 0 1 1h4v-1a3 3 0 1 1 6 0v1h4a1 1 0 0 0 1-1v-4h1a3 3 0 1 0 0-6h-1V7a1 1 0 0 0-1-1h-4V5a3 3 0 0 0-3-3Z"
      />
    </svg>
  );
};
export default Puzzle;
