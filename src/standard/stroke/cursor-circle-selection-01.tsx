import React from "react";
const CursorCircleSelection_01: React.FC<
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
        d="M8.506 2.14a8 8 0 0 1 3.003 0M8.506 17.876q.49.093 1.001.125m-7.366-6.49a8 8 0 0 1 0-3.004m15.734 0q.093.49.125 1.001m-3.491-6.124a8 8 0 0 1 2.123 2.123M5.506 16.632a8 8 0 0 1-2.123-2.123m0-9.003a8 8 0 0 1 2.123-2.123"
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
export default CursorCircleSelection_01;
