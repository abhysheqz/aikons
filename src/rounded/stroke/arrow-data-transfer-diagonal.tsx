import React from "react";
const ArrowDataTransferDiagonal: React.FC<
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
        d="m9 19 9.18-9.006c.748-.734 1.122-1.1 1.444-.967.323.134.329.659.34 1.708l.036 3.31M15 5l-9.18 9.006c-.748.734-1.122 1.1-1.444.967-.323-.134-.329-.659-.34-1.708L4 9.955"
      />
    </svg>
  );
};
export default ArrowDataTransferDiagonal;
