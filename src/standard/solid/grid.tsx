import React from "react";
const Grid: React.FC<
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
        d="M17 2a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v8h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8v3a1 1 0 1 1-2 0v-3H3a1 1 0 1 1 0-2h3V8H3a1 1 0 0 1 0-2h3V3a1 1 0 0 1 2 0v3h8V3a1 1 0 0 1 1-1M8 16h8V8H8z"
      />
    </svg>
  );
};
export default Grid;
