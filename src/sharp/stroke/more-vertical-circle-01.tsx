import React from "react";
const MoreVerticalCircle_01: React.FC<
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
        d="M14 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM14 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      />
    </svg>
  );
};
export default MoreVerticalCircle_01;
