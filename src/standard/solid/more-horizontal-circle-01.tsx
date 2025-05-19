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
        fill="currentColor"
        d="M17 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M9.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M2 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"
      />
    </svg>
  );
};
export default MoreHorizontalCircle_01;
