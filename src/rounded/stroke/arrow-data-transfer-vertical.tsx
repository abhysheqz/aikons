import React from "react";
const ArrowDataTransferVertical: React.FC<
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
        d="M15 19V6.659c0-1.006 0-1.51.309-1.634.308-.125.672.23 1.398.941L19 8.211M9 5v12.341c0 1.006 0 1.51-.309 1.634-.308.125-.672-.23-1.398-.941L5 15.789"
      />
    </svg>
  );
};
export default ArrowDataTransferVertical;
