import React from "react";
const CursorMove_01: React.FC<
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
        d="M14.5 2v2.5m0-2.5L16 3.5M14.5 2 13 3.5m6 3h-2.5m2.5 0L17.5 5M19 6.5 17.5 8m-3 3V8.5m0 2.5L16 9.5M14.5 11 13 9.5m-3-3h2.5m-2.5 0L11.5 8M10 6.5 11.5 5M17.25 11.432l1.579 1.396a.505.505 0 0 1-.27.879l-5.087.676a.505.505 0 0 0-.403.69l2.223 5.477a.505.505 0 0 1-.28.658l-1.879.755a.51.51 0 0 1-.66-.28l-2.198-5.412a.51.51 0 0 0-.81-.187l-3.618 3.232A.508.508 0 0 1 5 18.913l.892-16.434a.508.508 0 0 1 .844-.35L9.1 4.218"
      />
    </svg>
  );
};
export default CursorMove_01;
