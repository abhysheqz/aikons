import React from "react";
const CursorProgress_01: React.FC<
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
        d="m17.5 11.652 1.329 1.176a.505.505 0 0 1-.27.879l-5.087.676a.505.505 0 0 0-.403.69l2.223 5.477a.505.505 0 0 1-.28.658l-1.879.755a.51.51 0 0 1-.66-.28l-2.198-5.412a.51.51 0 0 0-.81-.187l-3.618 3.232A.508.508 0 0 1 5 18.913l.892-16.434a.508.508 0 0 1 .844-.35L9 4.13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.759 2.031a4.2 4.2 0 0 0-1.018 0m1.018 7.938a4.2 4.2 0 0 1-1.018 0M19 4.449a4 4 0 0 0-.509-.866M12.01 8.418a4 4 0 0 1-.509-.866m.508-3.97a4 4 0 0 0-.508.867M19 7.552a4 4 0 0 1-.509.866"
      />
    </svg>
  );
};
export default CursorProgress_01;
