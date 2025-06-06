import React from "react";
const CursorLoading_01: React.FC<
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
        d="M15 6a3 3 0 0 0 3-3V2h-6v1a3 3 0 0 0 3 3m0 0a3 3 0 0 1 3 3v1h-6V9a3 3 0 0 1 3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.169 12.244.66.584a.505.505 0 0 1-.27.879l-5.087.676a.505.505 0 0 0-.403.69l2.223 5.477a.505.505 0 0 1-.28.658l-1.879.755a.51.51 0 0 1-.66-.28l-2.198-5.412a.51.51 0 0 0-.81-.187l-3.618 3.232A.508.508 0 0 1 5 18.913l.892-16.434a.508.508 0 0 1 .844-.35l3.512 3.107"
      />
    </svg>
  );
};
export default CursorLoading_01;
