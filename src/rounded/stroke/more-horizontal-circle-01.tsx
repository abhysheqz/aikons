import React from "react";
const MoreHorizontalCircle_01: React.FC<
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
        strokeWidth={1.5}
        d="M21 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM13.5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM6 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      />
    </svg>
  );
};
export default MoreHorizontalCircle_01;
