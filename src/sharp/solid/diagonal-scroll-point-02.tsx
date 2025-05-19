import React from "react";
const DiagonalScrollPoint_02: React.FC<
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
        d="M21 14v7h-7v-2h5v-5zM3 3h7v2H5v5H3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiagonalScrollPoint_02;
