import React from "react";
const CheckmarkBadge_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.36 2.533 9 4.5H5.5a1 1 0 0 0-1 1V9l-1.967 2.36a1 1 0 0 0 0 1.28L4.5 15v3.5a1 1 0 0 0 1 1H9l2.36 1.967a1 1 0 0 0 1.28 0L15 19.5h3.5a1 1 0 0 0 1-1V15l1.967-2.36a1 1 0 0 0 0-1.28L19.5 9V5.5a1 1 0 0 0-1-1H15l-2.36-1.967a1 1 0 0 0-1.28 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12.893s1.2.652 1.8 1.607c0 0 1.8-3.75 4.2-5"
      />
    </svg>
  );
};
export default CheckmarkBadge_01;
