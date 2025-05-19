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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8.506 2.14a8 8 0 0 1 3.003 0M8.506 17.876q.49.093 1.001.125m-7.366-6.49a8 8 0 0 1 0-3.004m15.734 0q.093.49.125 1.001m-3.491-6.124a8 8 0 0 1 2.123 2.123M5.506 16.632a8 8 0 0 1-2.123-2.123m0-9.003a8 8 0 0 1 2.123-2.123M13.818 22 10 10l12 3.818-4.093 2.473 3.82 3.8-1.643 1.643-3.81-3.81z"
      />
    </svg>
  );
};
export default CursorCircleSelection_01;
