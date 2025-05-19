import React from "react";
const CursorCircleSelection_02: React.FC<
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
        d="m9.5 9.5 12 4.667-5.333 2-2 5.333zM9.006 2.64a8 8 0 0 1 3.003 0M9.006 18.376q.49.093 1.001.125m-7.366-6.49a8 8 0 0 1 0-3.004m15.734 0q.093.49.125 1.001m-3.491-6.124a8 8 0 0 1 2.123 2.123M6.006 17.132a8 8 0 0 1-2.123-2.123m0-9.003a8 8 0 0 1 2.123-2.123"
      />
    </svg>
  );
};
export default CursorCircleSelection_02;
