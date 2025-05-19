import React from "react";
const CursorRectangleSelection_01: React.FC<
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
        d="M2 8.5v3M11.5 2h-3m0 16H9m9-13.5V2h-2.5M2 4.5V2h2.5m0 16H2v-2.5M18 9v-.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.818 22 10 10l12 3.818-4.093 2.473 3.82 3.8-1.643 1.643-3.81-3.81z"
      />
    </svg>
  );
};
export default CursorRectangleSelection_01;
