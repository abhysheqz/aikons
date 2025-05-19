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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8.5v3M11.5 2h-3m0 16h1M18 4.5V4a2 2 0 0 0-2-2h-.5M2 4.5V4a2 2 0 0 1 2-2h.5m0 16H4a2 2 0 0 1-2-2v-.5m16-6v-1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.895 21.645-3.873-11.127a.39.39 0 0 1 .497-.496l11.135 3.87a.39.39 0 0 1 .073.702l-2.999 1.811a.39.39 0 0 0-.073.61l3.23 3.21a.39.39 0 0 1 0 .552l-1.108 1.109a.39.39 0 0 1-.552 0l-3.223-3.221a.39.39 0 0 0-.61.074l-1.795 2.979a.39.39 0 0 1-.702-.073Z"
      />
    </svg>
  );
};
export default CursorRectangleSelection_01;
