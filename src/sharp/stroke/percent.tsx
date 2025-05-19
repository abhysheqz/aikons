import React from "react";
const Percent: React.FC<
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
        d="M4 20 20 4M8.268 4.732a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536ZM19.268 15.732a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536Z"
      />
    </svg>
  );
};
export default Percent;
