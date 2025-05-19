import React from "react";
const Tetris: React.FC<
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
        d="M10 3H8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM20 21a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zM17 17v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3M6 7H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
};
export default Tetris;
