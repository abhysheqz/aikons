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
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 10v4h-4v-4zM13 19h6v-6M11 5H5v6"
      />
    </svg>
  );
};
export default DiagonalScrollPoint_02;
