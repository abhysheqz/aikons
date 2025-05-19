import React from "react";
const CursorText: React.FC<
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
        d="M13 17 8.5 7h-1L3 17m8-4H5M16 3c.833-.007 2 .5 2.5 1.5m0 0C19 3.5 20.167 3 21 3m-2.5 1.5v15M21 21c-.833.007-2-.5-2.5-1.5m0 0c-.5 1-1.667 1.5-2.5 1.5m4-9h-3"
      />
    </svg>
  );
};
export default CursorText;
