import React from "react";
const Halal: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.86 2.533 9.5 4.5H6a1 1 0 0 0-1 1V9l-1.967 2.36a1 1 0 0 0 0 1.28L5 15v3.5a1 1 0 0 0 1 1h3.5l2.36 1.967a1 1 0 0 0 1.28 0L15.5 19.5H19a1 1 0 0 0 1-1V15l1.967-2.36a1 1 0 0 0 0-1.28L20 9V5.5a1 1 0 0 0-1-1h-3.5l-2.36-1.967a1 1 0 0 0-1.28 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 13.5v.5a1 1 0 0 1-1 1h-1.5m2.5-1.5h3.617a.5.5 0 0 0 .429-.757L17 11m-3 2.5v-1m0 0L13.979 9M14 12.5l-2-2M9.488 9l.01 4.998a1 1 0 0 1-1 1.002H7.5"
      />
    </svg>
  );
};
export default Halal;
