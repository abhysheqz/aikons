import React from "react";
const CheckmarkBadge_04: React.FC<
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
        d="M16 4.5h-1l-2.36-1.967a1 1 0 0 0-1.28 0L9 4.5H5.5a1 1 0 0 0-1 1V9l-1.967 2.36a1 1 0 0 0 0 1.28L4.5 15v3.5a1 1 0 0 0 1 1H9l2.36 1.967a1 1 0 0 0 1.28 0L15 19.5h3.5a1 1 0 0 0 1-1V15l1.967-2.36a1 1 0 0 0 0-1.28L20 9.6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 11 3 3 9-10"
      />
    </svg>
  );
};
export default CheckmarkBadge_04;
