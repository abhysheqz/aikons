import React from "react";
const ArrowUpLeft_02: React.FC<
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
        d="m10 10 8 8"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M7 13 6 6l7 1z" />
    </svg>
  );
};
export default ArrowUpLeft_02;
