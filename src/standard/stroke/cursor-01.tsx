import React from "react";
const Cursor_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5 18.913.893-16.434a.508.508 0 0 1 .844-.35l12.092 10.7a.505.505 0 0 1-.27.878l-5.087.676a.505.505 0 0 0-.403.69l2.223 5.477a.505.505 0 0 1-.28.658l-1.879.755a.51.51 0 0 1-.66-.28l-2.198-5.412a.51.51 0 0 0-.81-.187l-3.618 3.232A.508.508 0 0 1 5 18.913Z"
      />
    </svg>
  );
};
export default Cursor_01;
