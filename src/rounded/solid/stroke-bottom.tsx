import React from "react";
const StrokeBottom: React.FC<
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
        d="M10.93 2h2.14c1.355 0 2.471 0 3.355.119.928.124 1.747.396 2.403 1.053.657.656.928 1.475 1.053 2.403.12.884.119 2 .119 3.354V17a1 1 0 1 1-2 0V9c0-1.442-.002-2.424-.1-3.159-.096-.706-.263-1.033-.486-1.255-.222-.223-.55-.39-1.255-.485C15.424 4.002 14.443 4 13 4h-2c-1.442 0-2.424.002-3.159.1-.706.096-1.033.263-1.255.486-.223.222-.39.55-.485 1.255C6.002 6.576 6 7.558 6 9v8a1 1 0 1 1-2 0V8.93c0-1.355 0-2.471.119-3.355.125-.928.396-1.747 1.053-2.403.656-.657 1.475-.929 2.403-1.053.884-.12 2-.119 3.354-.119M21 22H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StrokeBottom;
