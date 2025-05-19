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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m17 11.73 2 1.77-6.23.898 2.618 6.48L12.61 22l-2.618-6.48L5 19.5 6 2l3 2.654M15 3v6m3-3h-6"
      />
    </svg>
  );
};
export default CursorAddSelection_01;
