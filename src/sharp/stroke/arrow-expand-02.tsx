import React from "react";
const ArrowExpand_02: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M3 9V3h6M21 15v6h-6" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20.277 20.277-6.771-6.768M10.494 10.505l-7.08-7.08"
      />
    </svg>
  );
};
export default ArrowExpand_02;
