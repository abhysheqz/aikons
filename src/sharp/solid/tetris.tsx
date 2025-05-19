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
        fill="currentColor"
        d="M21 21v-4h-4v-4h-4v4H9v4zM7 3h4v8H7v4H3V7h4z"
      />
    </svg>
  );
};
export default Tetris;
