import React from "react";
const Connect: React.FC<
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
        fillRule="evenodd"
        d="M18.293 4.293 21.086 1.5 22.5 2.914l-2.793 2.793z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.428 4.435a5.754 5.754 0 0 1 8.137 8.137l-1.988 1.989-8.138-8.136zM12.572 19.565a5.754 5.754 0 0 1-8.137-8.136l1.988-1.99 8.137 8.136z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m1.5 21.086 2.793-2.793 1.414 1.414L2.914 22.5zM12.707 8.707l-2.5 2.5-1.414-1.414 2.5-2.5zm4 4-2.5 2.5-1.414-1.414 2.5-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Connect;
