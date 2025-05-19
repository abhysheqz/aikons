import React from "react";
const ArrowExpandDiagonal_02: React.FC<
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
        d="M16.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0M3 2h4a1 1 0 1 1 0 2H5.414l4.293 4.293a1 1 0 0 1-1.414 1.414L4 5.415V7a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M14.293 14.293a1 1 0 0 1 1.414 0L20 18.586V17a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.586l-4.293-4.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowExpandDiagonal_02;
