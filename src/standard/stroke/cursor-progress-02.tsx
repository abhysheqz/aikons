import React from "react";
const CursorProgress_02: React.FC<
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
        d="m18.03 12.121.799.707a.505.505 0 0 1-.27.879l-5.087.676a.505.505 0 0 0-.403.69l2.223 5.477a.505.505 0 0 1-.28.658l-1.879.755a.51.51 0 0 1-.66-.28l-2.198-5.412a.51.51 0 0 0-.81-.187l-3.618 3.232A.508.508 0 0 1 5 18.913l.892-16.434a.508.508 0 0 1 .844-.35l1.588 1.404"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 2s-1 .818-1 2.455c0 1.636 2 2.454 2 4.09 0 1.637-1 2.455-1 2.455m0-9A4.5 4.5 0 0 0 10 6.5M14.5 2A4.5 4.5 0 0 1 19 6.5M14.5 11A4.5 4.5 0 0 0 19 6.5M14.5 11A4.5 4.5 0 0 1 10 6.5m9 0s-.818-1-2.454-1-2.455 2-4.091 2S10 6.5 10 6.5"
      />
    </svg>
  );
};
export default CursorProgress_02;
