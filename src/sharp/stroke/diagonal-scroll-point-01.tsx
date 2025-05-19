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
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 10v4h-4v-4zM19 11V5h-6M5 13v6h6"
      />
    </svg>
  );
};
export default DiagonalScrollPoint_01;
