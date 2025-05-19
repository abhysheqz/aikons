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
        strokeWidth={1.5}
        d="M11 3H7v8h4zM21 21v-4H9v4zM17 17v-4h-4v4zM7 7H3v8h4z"
      />
    </svg>
  );
};
export default Tetris;
