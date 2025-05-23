import React from "react";
const CursorAddSelection_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17 11.21 1.829 1.618a.505.505 0 0 1-.27.879l-5.087.676a.505.505 0 0 0-.403.69l2.223 5.477a.505.505 0 0 1-.28.658l-1.879.755a.51.51 0 0 1-.66-.28l-2.198-5.412a.51.51 0 0 0-.81-.187l-3.618 3.232A.508.508 0 0 1 5 18.913l.892-16.434a.508.508 0 0 1 .844-.35l2.729 2.414M15 3v6m3-3h-6"
      />
    </svg>
  );
};
export default CursorAddSelection_01;
