import React from "react";
const SixSquare: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.747 1.75h-20.5v20.5h20.5zM11.497 6a3 3 0 0 0-3 3v6.5h.042a3 3 0 0 0 2.958 2.5h2a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-2c-.35 0-.687.06-1 .17V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.5h2V9a3 3 0 0 0-3-3zm-1 9v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SixSquare;
