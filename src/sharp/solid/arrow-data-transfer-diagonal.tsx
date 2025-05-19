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
        fill="currentColor"
        fillRule="evenodd"
        d="M20.383 7.076A1 1 0 0 1 21 8v6h-2v-3.586L9.414 20 8 18.586 19.293 7.293a1 1 0 0 1 1.09-.217M3.617 16.924A1 1 0 0 1 3 16v-6h2v3.586L14.586 4 16 5.414 4.707 16.707a1 1 0 0 1-1.09.217"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowDataTransferDiagonal;
