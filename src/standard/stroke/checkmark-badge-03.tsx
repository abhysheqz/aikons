import React from "react";
const CheckmarkBadge_03: React.FC<
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
        d="m20 9.6 1.467 1.76a1 1 0 0 1 0 1.28L19.5 15v3.5a1 1 0 0 1-1 1H15l-2.36 1.967a1 1 0 0 1-1.28 0L9 19.5H5.5a1 1 0 0 1-1-1V15l-1.967-2.36a1 1 0 0 1 0-1.28L4.5 9V5.5a1 1 0 0 1 1-1H9l2.36-1.967a1 1 0 0 1 1.28 0l1.86 1.55"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 11.308S11 12 12 15c0 0 4.559-10 9.5-12"
      />
    </svg>
  );
};
export default CheckmarkBadge_03;
