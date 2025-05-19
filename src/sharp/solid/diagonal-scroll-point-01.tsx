import React from "react";
const DiagonalScrollPoint_01: React.FC<
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
      <path fill="currentColor" d="M15 9v6H9V9z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 3h7v7h-2V5h-5zM5 19v-5H3v7h7v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiagonalScrollPoint_01;
