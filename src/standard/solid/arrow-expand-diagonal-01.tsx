import React from "react";
const ArrowExpandDiagonal_01: React.FC<
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
        d="M7.293 7.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414M16 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V4h-3a1 1 0 0 1-1-1M3 16a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.707 2.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0M9.707 14.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowExpandDiagonal_01;
